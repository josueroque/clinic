var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('historial', { title: 'Express' });
});


// router.post('/', async (req, res, next) => {
//   try {
//     // console.log(req.body.paciente.nombre );  
//     // console.log(req.body.paciente.apellido );  
//     console.log(req.body);
//     res.render('historial', { title: 'Express' });
    
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
