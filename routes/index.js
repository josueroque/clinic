var express = require('express');
var router = express.Router();
const Patient = require('../models/Patient');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/patients', async (req, res, next) => {
  try {
  const patients = await Patient.listAll();
 // res.json({ success: true, results:patients });
 res.json(patients);
  } catch (err) {

    next(err);
  }
});

router.get('/patient', async (req, res, next) => {
  try {
    const id=req.query.id;
  let filter = {};

  if(id){
    filter.idNumber=id;
    }
//console.log( filter);
    const patient = await Patient.list({filter: filter});

 res.json(patient);
  } catch (err) {

    next(err);
  }
});

router.get('/patientList',async function(req, res, next) {
  //console.log('paciente: '+sess.patient1);
  res.render('patientList', { title: 'Express' });
});
/* GET home page. */
router.get('/historial',  function(req, res, next) {


//console.log('paciente: '+sess.patient1);
  res.render('historial', { title: 'Express' });
});

router.post('/patientList',  (req, res, next) => {
  try {
    const data = req.body;
     sess=req.session;
     sess.patient1=data;
     
    console.log(sess.patient1);
    res.redirect('/historial');
    
  } catch (err) {
    next(err);
  };
});

router.post('/historial', async (req, res, next) => {
  try {
    const data = req.body;
    data['socialInsurance']=true;
    data['knowWriteRead']=true;
    data['livesAlone']=true;
    console.log(data);
    const patient = new Patient(data);
   // console.log(req.body);
    const savedPatient = await patient.save();
   // res.json({ success: true, result: savedPatient });
    res.render('historial', {title: savedPatient });
    
  } catch (err) {
    next(err);
  };

});

module.exports = router;
