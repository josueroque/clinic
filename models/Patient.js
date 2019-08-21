'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const patientSchema = mongoose.Schema({
  idNumber:String,
  name: String,
  lastName: String,
  socialInsurance:Boolean,
  address:String,
  city:String,
  phone:String,
  birthday:Date,
  race:String,
  educationLevel:String,
  maritalStatus:String,
  knowWriteRead:Boolean,
  livesAlone:Boolean,
  controlPlace:String,
  childbirthPlace:String,
  
}
//, { collection: 'agentes'} // para saltarse la pluralización
);

// en los metodos de modelos de mongoose no usar arrow functions (perdemos el this a la instancia)

patientSchema.statics.list = function({filter}) {
  const query = Patient.find(filter);
  // console.log(filter);
  // query.skip(skip);
  // query.limit(limit);
  // query.select(fields);   
  // query.sort(sort);
 // query.start(start);

  return query.exec();
}

patientSchema.statics.listAll = function() {
  const query = Patient.find();
  // console.log(filter);
  // query.skip(skip);
  // query.limit(limit);
  // query.select(fields);   
  // query.sort(sort);
 // query.start(start);
  return query.exec();
}

patientSchema.statics.listTags = function() {
  const query = Patient.distinct("tags") ;
 // console.log(filter);

 // query.start(start);
  return query.exec();
}

// creamos el modelo de agente
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
