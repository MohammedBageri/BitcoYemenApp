const mongoose = require('mongoose');
//const validator = require('validator');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const roles = require('../utils/roles');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: isEmail,
      message: 'Please provide valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide phone number'],
  },
  address: {
    type: String,
    required: [true, 'Please provide address'],
  },
  identityImageUrl: {
    type: String,
    required: [true, 'Please provide identity image'],
  },
  role: {
    type: String,
    enum: Object.values(roles),
    default: 'user',
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  affiliateRef: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  }
});

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

function isEmail(email) {
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
  })

  const { error } = schema.validate({ email });
  return error ? false : true; 
}

module.exports = mongoose.model('User', UserSchema);
