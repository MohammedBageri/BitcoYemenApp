const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const {
  createTokenUser,
  attachCookiesToResponse,
  checkPermissions,
} = require('../utils');
const removeFileIfExist = require('../utils/removeFileIfExist');

const getAllUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const users = await User.find(req.query)
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 })
    .select('-password');
  const count = await User.find(req.query).count();  
  res.status(StatusCodes.OK).json({ 
    users,
    totalPages: Math.ceil(count / limit),
    currentPage: +page, 
  });
};

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-password');
  if (!user) {
    throw new CustomError.NotFoundError(`${req.params.id} المستخدم لا يوجد`);
  }
  checkPermissions(req.user, user._id);
  res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};
// update user with user.save()
const updateUser = async (req, res) => {
  const { phoneNumber, address } = req.body;
  if (!phoneNumber && !address && !req.imagePath) {
    throw new CustomError.BadRequestError('الرجاء على الاقل تزويد قيمة واحدة');
  }
  const user = await User.findOne({ _id: req.user.userId });

  if (req.imagePath) {
    removeFileIfExist(user.identityImageUrl);
  }

  user.phoneNumber = phoneNumber ? phoneNumber : user.phoneNumber;
  user.address = address ? address : user.address;
  user.identityImageUrl = req.imagePath ? req.imagePath : user.identityImageUrl;

  await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError('الرجاة تزويد القيمتين');
  }
  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('بيانات الاعتماد غير صحيحة');
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: 'تم تغير رمز الدخول بنجاح' });
};

const activateUser = async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new CustomError.BadRequestError('المستخدم غير موجود');
  }
  if(isActive) user.isActive = true; 
  else user.isActive = false;
  const result = await user.save();
  res.status(StatusCodes.OK).json(result);
}

const updateUserAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, phoneNumber, address, role } = req.body;
  if (!name, !phoneNumber && !address && !role) {
    throw new CustomError.BadRequestError('الرجاء ارفاق على الاقل قيمة واحدة');
  }
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new CustomError.NotFoundError(`${id} المستخدم لا يوجد`)
  }

  user.name = name || user.name;
  user.phoneNumber = phoneNumber ? phoneNumber : user.phoneNumber;
  user.address = address ? address : user.address;
  user.role = role || user.role;
  const result = await user.save();

  res.status(StatusCodes.OK).json(result);
}

const updateUserPasswordAdmin = async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;
  if (!newPassword) {
    throw new CustomError.BadRequestError('الرجاء ارفاق رمز الدخول الجديد للمستخدم');
  }
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new CustomError.NotFoundError(`${id} المستخدم لا يوجد`)
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: 'تم تغير رمز الدخول للمستخدم بنجاح' });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  activateUser,
  updateUserAdmin,
  updateUserPasswordAdmin,
};
