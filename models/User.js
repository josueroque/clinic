'use strict';
const mongoose = require('mongoose');
var hash = require('hash.js');

//const nodemailerTransport = require('../lib/nodemailerConfigure');
const userSchema = mongoose.Schema({
  name:String,
  email: { type: String, unique: true },
  password: String
});

userSchema.statics.list = async function () {
  const query = User.find();
  return query.exec();
};

userSchema.statics.hashPassword = function (plain) {
  return hash.sha256().update(plain).digest('hex');
};

// userSchema.methods.sendEmail=function(from,subject,body){
//  //return nodemailerTransport.sendMail({
//     from:from,
//     to:this.email,
//     subject:subject,
//     html:body
//   });
//};

const User = mongoose.model('User', userSchema);

module.exports = User;

