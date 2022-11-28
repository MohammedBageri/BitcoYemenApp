const User = require("../models/User");
const Token = require("../models/Token");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const removeFileIfExist = require("../utils/removeFileIfExist");
const {
  attachCookiesToResponse,
  createTokenUser,
  sendVerificationEmail,
  sendResetPasswordEmail,
  createHash,
} = require("../utils");
const crypto = require("crypto");

const register = async (req, res) => {
  let { email, name, password, phoneNumber, address, affiliateRef } = req.body;

  if (!req.imagePath) {
    throw new CustomError.BadRequestError("الرجاء ارفاق صورة للهوية");
  }

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    removeFileIfExist(req.imagePath);
    throw new CustomError.BadRequestError(`البريد الالكتروني موجود بالفعل`);
  }

  //add affiliate account
  const userRef = await User.findOne({ _id: affiliateRef });
  if (!userRef || userRef.role !== "user") {
    affiliateRef = undefined;
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const verificationToken = crypto.randomBytes(40).toString("hex");

  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
    address,
    identityImageUrl: req.imagePath,
    role,
    verificationToken,
    affiliateRef,
  });
  const origin = process.env.ORIGIN; //'http://localhost:3000';
  // const newOrigin = 'https://react-node-user-workflow-front-end.netlify.app';

  // const tempOrigin = req.get('origin');
  // const protocol = req.protocol;
  // const host = req.get('host');
  // const forwardedHost = req.get('x-forwarded-host');
  // const forwardedProtocol = req.get('x-forwarded-proto');

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });
  // send verification token back only while testing in postman!!!
  res.status(StatusCodes.CREATED).json({
    msg: "تمت العملية بنجاح, الرجاء مراجعة البريد الإلكتروني للتاكيد حسابك",
  });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("خطا في التحقق");
  }

  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError("خطا في التحقق");
  }

  (user.isVerified = true), (user.verified = Date.now());
  user.verificationToken = "";

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "تم التحقق من البريد الإلكتروني" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError(
      "الرجاء ارفاق البريد الإلكتروني و رمز الدخول"
    );
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("بيانات الاعتماد غير صالحة");
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("بيانات الاعتماد غير صالحة");
  }
  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError(
      "الرجاء التحقق من البريد الإلكتروني"
    );
  }
  const tokenUser = createTokenUser(user);

  // create refresh token
  let refreshToken = "";
  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError("بيانات الاعتماد غير صحيحة");
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res.status(StatusCodes.OK).json({ user: tokenUser });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  attachCookiesToResponse({ res, user: tokenUser, refreshToken });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};
const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId });

  res.cookie("accessToken", "logout", {
    secure: true,
    signed: true,
    sameSite: "none",
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    secure: true,
    signed: true,
    sameSite: "none",
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "تم تسجيل الخروج" });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new CustomError.BadRequestError("الرجاء ادخال بريد الإلكتروني حقيقي");
  }

  const user = await User.findOne({ email });

  if (user && user.role === "user") {
    const passwordToken = crypto.randomBytes(70).toString("hex");
    // send email
    const origin = process.env.ORIGIN; //'http://localhost:3000';
    await sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

    user.passwordToken = createHash(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();
  }

  res.status(StatusCodes.OK).json({
    msg: "يرجى مراجعة بريدك الالكرنوني للحصول على رابط اعادة رمز الدخول",
  });
};
const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!token || !email || !password) {
    throw new CustomError.BadRequestError("الرجاء ارفاق جميع البيانات");
  }
  const user = await User.findOne({ email });

  if (user && user.role === "user") {
    const currentDate = new Date();

    if (
      user.passwordToken === createHash(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }

  res.send("تمت تغيير رمز الدخول");
};

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
