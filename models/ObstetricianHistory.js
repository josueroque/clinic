'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const obstetricianHistorySchema = mongoose.Schema({
  lessThan2500:Boolean,
  greaterThan4000:Boolean,
  twinsHistory:Boolean,
  noneOrMoreThanFour:Boolean,
  previousPregnancies:Number,
  abortions:Number,
  threeSpontaneousConsecutive:Boolean,
  vaginal:Boolean,
  liveBirths:Number,
  alive:Number,
  births:Number  
  
}

);

obstetricianHistory.statics.list = function({filter}) {
  const query = obstetricianHistory.find(filter);

  return query.exec();
}

obstetricianHistorySchema.statics.listAll = function() {
  const query = Patient.find();
  return query.exec();
}

// patientSchema.statics.listTags = function() {
//   const query = Patient.distinct("tags") ;
//   return query.exec();
// }

const ObstetricianHistory = mongoose.model('obstetricianHistory', obstetricianHistorySchema);

module.exports = ObstetricianHistory;
