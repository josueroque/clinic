'use strict'
var express = require('express');
var router = express.Router();
var moment = require('moment');
const Patient = require('../models/Patient');

// //session
 const session = require('express-session');
// const app = express();
 const bodyParser = require('body-parser');
// app.use(session({secret: 'test',saveUninitialized: true,resave: true}));
// app.use(bodyParser.json());      
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/views'));
// var sess; // global session, NOT recommended
// //session

/* GET home page. */
router.get('/', function(req, res, next) {
 // sess=req.session;
 //if (req.session.idNumber){
   console.log('from home '+req.session.idNumber);
 //}
  res.render('index', { title: 'Express' });
});

router.get('/patients', async (req, res, next) => {
  try {
 // sess=req.session;
  const patients = await Patient.listAll();
 // res.json({ success: true, results:patients });
 res.json(patients);
  } catch (err) {

    next(err);
  }
});

router.get('/patient', async (req, res, next) => {
  try {
    let sess=req.session;
     sess.idNumber=req.query.id;
     console.log('pat'+sess.idNumber);
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
  //sess=req.session;
  //console.log('paciente: '+sess.patient1);
  res.render('patientList', { title: 'Express' });
});
/* GET home page. */
router.get('/historial',  function(req, res, next) {
res.locals.data={};

console.log(res.locals.data + 'desde historial' );

res.render('historial', { title: 'Express' });
});

router.get('/historial2',  function(req, res, next) {
  res.locals.data={};
  
  console.log(res.locals.data + 'desde historial' );
  
  res.render('historial', { title: 'Express' });
  });

router.post('/patientList',  (req, res, next) => {
  try {
    const data = req.body;
    //  sess=req.session;
    //  sess.patient1=data;
     res.locals.data={};
   // console.log(sess.patient1);
    res.render('/historial');
    
  } catch (err) {
    next(err);
  };
});

router.post('/modificar', async (req, res, next) => {
  try {   
     // sess=req.session;
      const data = req.body;
      const id = data['idNumber'];   
      const savedPatient = await Patient.findOneAndUpdate({idNumber:id}, data, { new: true }).exec(); 
            // new: true --> hace que retorne la versión del agente guardada en la base de datos   
            res.locals.data={}; 
                 
            res.render('historial', {title: savedPatient }); 
          } 
          catch (err) {   
            next(err); 
           } 
        });

router.post('/historial', async (req, res, next) => {
  try {
    const data = req.body;

    const patient = new Patient(data);

    const savedPatient = await patient.save();

    res.locals.data={};
    res.render('historial', {title: savedPatient });
    
  } catch (err) {
    next(err);
  };

});

router.post('/historial2', async (req, res, next) => {
  try {
   // sess=req.session;
   // console.log('hist2'+ sess.idNumber);
   console.log('hist '+req.session.idNumber);
     res.locals.data = JSON.parse(req.body['patient']);
     res.locals.data['birthday'].toString;
     res.locals.data['birthday']= res.locals.data['birthday'].substring(0, 10);

    let dt= new Date;
    dt= moment(res.locals.data['birthday']).format('YYYY-MM-DD')
    res.locals.data['birthday']=dt;

    res.render('historial' );
    
  } catch (err) {
    next(err);
  };

});

module.exports = router;
