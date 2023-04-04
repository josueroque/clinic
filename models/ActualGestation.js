"use strict";

const mongoose = require("mongoose");

const actualGestationSchema = mongoose.Schema({
  idNumber: { type: String, required: true, unique: false },
  dateGestation: Date,
  lastMenstruationDate: Date,
  previousWeight: Number,
  size: Number,
  antitetanicCurrent: Boolean,
  antitetanicDose1: Number,
  antitetanicDose2: Number,
  visualInspection: String,
  papanicolao: String,
  colposcopy: String,
  dental: Boolean,
  mammary: Boolean,
  group: String,
  rh: String,
  inmunized: Boolean,
  globulin: Boolean,
  toxoplasmosisLessThanTwenty: Boolean,
  toxoplasmosisGreaterThanTwenty: Boolean,
  toxoplasmosisFirst: Boolean,
  vihRequestedLessThanTwenty: Boolean,
  vihDoneLessThanTwenty: Boolean,
  vihRequestedGreaterThanTwenty: Boolean,
  vihDoneGreaterThanTwenty: Boolean,
  hemoglobinLessThanTwenty: Number,
  hemoglobinGreaterThanTwenty: Number,
  syphilisVDLRLessThanTwenty: Boolean,
  syphilisVDLRLessThanTwentyWeeks: Number,
  syphilisVDLRGreaterThanTwenty: Boolean,
  syphilisVDLRGreaterThanTwentyWeeks: Number,
  syphilisFTALessThanTwenty: String,
  syphilisFTALessThanTwentyWeeks: Number,
  syphilisFTAGreaterThanTwenty: String,
  syphilisFTAreaterThanTwentyWeeks: Number,
  syphilisTreatmentLessThanTwenty: String,
  syphilisTreatmentLessThanTwentyWeeks: Number,
  syphilisTreatmentGreaterThanTwenty: String,
  syphilisTreatmentGreaterThanTwentyWeeks: Number,
  syphilisPartnerTreatmentLessThanTwenty: String,
  syphilisPartnerTreatmentGreaterThanTwenty: String,
  bacteriuriaLessThanTwenty: Boolean,
  bacteriuriaGreaterThanTwenty: Boolean,
  bloodGlucoseLessThanTwenty: Number,
  bloodGlucoseGreaterThanTwenty: Number,
});

actualGestationSchema.statics.list = function ({ filter }) {
  console.log("desde moddelo ");
  console.log(filter);
  const query = ActualGestation.find(filter);
  return query.exec();
};

actualGestationSchema.statics.listAll = function () {
  const query = ActualGestation.find();
  return query.exec();
};

const ActualGestation = mongoose.model(
  "ActualGestation",
  actualGestationSchema
);

module.exports = ActualGestation;
