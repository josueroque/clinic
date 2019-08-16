var express = require('express');
var router = express.Router();
const Pacient = require('../models/Pacient');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/patients', async (req, res, next) => {
  try {
  const patients = await Pacient.list();
 // res.json({ success: true, results:patients });
 res.json(patients);
  } catch (err) {

    next(err);
  }
});

router.get('/pacientList', function(req, res, next) {
  res.render('pacientList', { title: 'Express' });
});
/* GET home page. */
router.get('/historial', function(req, res, next) {
  res.render('historial', { title: 'Express' });
});



router.post('/historial', async (req, res, next) => {
  try {
    const data = req.body;
    data['socialInsurance']=true;
    data['knowWriteRead']=true;
    data['livesAlone']=true;
    console.log(data);
    const pacient = new Pacient(data);
   // console.log(req.body);
    const savedPacient = await pacient.save();
   // res.json({ success: true, result: savedPacient });
    res.render('historial', {title: savedPacient });
    
  } catch (err) {
    next(err);
  };

});

module.exports = router;
