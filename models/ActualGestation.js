'use strict';

const mongoose = require('mongoose');

const actualGestationSchema = mongoose.Schema({
    
    idNumber:{ type: String, required: true, unique: false },
    dateGestation:Date,
    previousWeight:Number,
    size:Boolean,
    antitetanicCurrent:Boolean,
    antitetanicDose1:Boolean,
    antitetanicDose2:Boolean,
    visualInspection:Boolean,
    papaNicolao:Boolean,
    colposcopy:Boolean,
    dental:Boolean,
    mammary:Boolean,
    group:String,
    rh:String,
    inmunized:Boolean,
    globulin:Boolean,
    toxoplasmosisLessThanTwenty:Boolean,
    toxoplasmosisGreaterThanTwenty:Boolean,
    toxoplasmosisFirst:Boolean,
    vihRequestedLessThanTwenty:Boolean,
    vihDoneLessThanTwenty:Boolean,
    vihRequestedGreaterThanTwenty:Boolean,
    vihDoneGreaterThanTwenty:Boolean,
    hemoglobinLessThanTwenty:Number,
    hemoglobinGreaterThanTwenty:Number,
    syphilisVDLRLessThanTwenty:Boolean,
    syphilisVDLRLessThanTwentyWeeks:Number,
    syphilisVDLRGreaterThanTwenty:Boolean,
    syphilisVDLRGreaterThanTwentyWeeks:Number,
    syphilisFTALessThanTwenty:String,
    syphilisFTALessThanTwentyWeeks:Number,
    syphilisFTAGreaterThanTwenty:String,
    syphilisFTAreaterThanTwentyWeeks:Number,
    syphilisTreatmentThanTwenty:String,
    syphilisTreatmentLessThanTwentyWeeks:Number,
    syphilisTreatmentGreaterThanTwenty:String,
    syphilisTreatmentGreaterThanTwentyWeeks:Number,
    syphilisPartnerTypeLessThanTwenty:String,
    syphilisPartnerTypeGreaterThanTwenty:String,
    bacteriuriaLessThanTwenty:Boolean,
    bacteriuriaGreaterThanTwenty:Boolean,
    bloodGlucoseLessThanTwenty:Number,
    bloodGlucoseGreaterThanTwenty:Number,

  }
);

actualGestationSchema.statics.list = function({filter}) {
  const query = ActualGestation.find(filter);
  return query.exec();
}

actualGestationSchema.statics.listAll = function() {
  const query = ActualGestation.find();
  return query.exec();
}

const ActualGestation = mongoose.model('ActualGestation', actualGestationSchema);

module.exports = ActualGestation;
