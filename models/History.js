"use strict";

const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  idNumber: { type: String, required: true, unique: true },
  description: String,
  familyTcb: Boolean,
  familyDiabetes: Boolean,
  familyHypertension: Boolean,
  familyPreeclampsia: Boolean,
  familyEeclampssia: Boolean,
  personalTcb: Boolean,
  personalDiabetes: Boolean,
  personalHypertension: Boolean,
  personalPreeclampsia: Boolean,
  personalEeclampssia: Boolean,
  surgery: Boolean,
  infertility: Boolean,
  heartDicease: Boolean,
  kidneyDicease: Boolean,
  violence: Boolean,
  //Obstetrics
  previousGestation: Number,
  abortions: Number,
  spontaneousConsecutive: Boolean,
  deliveries: Number,
  vaginal: Number,
  cesareans: Number,
  bornAlive: Number,
  bornDead: Number,
  deadFirstWeek: Number,
  deadAfterFirstWeek: Number,
  stillAlive: Number,
  previousWeight: Number,
  twinsHistory: Boolean,
  //Previous pregnancy
  endDate: Date,
  terminationCondition: String,
  plannedPregnancy: Boolean,
  contraceptiveMethod: String,
});

historySchema.statics.list = function ({ filter }) {
  const query = History.find(filter);
  return query.exec();
};

historySchema.statics.listAll = function () {
  const query = History.find();
  return query.exec();
};

const History = mongoose.model("History", historySchema);

module.exports = History;
