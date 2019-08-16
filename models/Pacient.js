'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const pacientSchema = mongoose.Schema({
  idNumber:String,
  name: String,
  lastName: String,
  socialInsurance:Boolean,
  adress:Boolean,
  city:String,
  phone:String,
  //enterprise:Boolean,
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

pacientSchema.statics.list = function() {
  const query = Pacient.find({});
  // console.log(filter);
  // query.skip(skip);
  // query.limit(limit);
  // query.select(fields);   
  // query.sort(sort);
 // query.start(start);
  return query.exec();
}

pacientSchema.statics.listTags = function() {
  const query = Pacient.distinct("tags") ;
 // console.log(filter);

 // query.start(start);
  return query.exec();
}

// creamos el modelo de agente
const Pacient = mongoose.model('Pacient', pacientSchema);

module.exports = Pacient;
