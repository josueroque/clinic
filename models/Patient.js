'use strict';

const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    idNumber:{ type: String, required: true, unique: true },
    name: String,
    lastName: String,
    socialInsurance:Boolean,
    address:String,
    city:String,
    phone:String,
    birthday:Date,
    educationLevel:String,
    maritalStatus:String,
    knowWriteRead:Boolean,
    controlPlace:String,
    childBirthPlace:String,
    
  }
);

patientSchema.statics.list = function({filter}) {
  const query = Patient.find(filter);
  return query.exec();
}

patientSchema.statics.listAll = function() {
  const query = Patient.find();
  return query.exec();
}

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
