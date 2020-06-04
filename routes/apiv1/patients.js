'use strict';

const express = require('express');
const router = express.Router();
const Patient = require('../../models/Patient');

router.post('/', async (req, res, next) => {
  try {
    let data = req.body;
    console.log(data);
    data.createdAt=Date.now();
    const patient = new Patient(data);
    const patientSaved = await patient.save();

    res.json({ success: true, result: patientSaved });

  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {

    const _id = req.params.id;
   //await advert.setPhoto(req.files) ;
    await Advert.deleteOne({ _id: _id}).exec();
    await User.updateMany( {}, { $pullAll: {favorites: [_id] } });

    res.json({ success: true, result: 'item deleted!' });

  } catch (err) {
    console.log(err); 
    next(err);
  }
});



router.get('/',async (req, res, next) => {

  try {

   
    const active=req.query.active;
    const name= req.query.name;
    const lastName=req.query.lastName;
    const idNumber= req.query.idNumber;
    const limit = parseInt(req.query.limit);
    const fields = req.query.fields;
    let sort = req.query.sort;
    const id=req.query.id;
    const start =req.query.start
        
    let skip;
    
    console.log(req.query);

    let filter = {};
    let exp = new RegExp('^' + name + '','i');
    let exp2 = new RegExp('^' + lastName + '','i');
    let exp3 = new RegExp('^' + idNumber + '','i');
   
    if(name){
      filter= {name:exp};
    }

    if(lastName){
      filter.lastName=exp2;
    }

    if(idNumber){
      filter.idNumber=exp3;
    }

    if(req.query.skip){
      if (isNaN(req.query.skip)){

        res.status(422); 
        throw ('Invalid skip Parameter');
      }
       else{ 
        skip=parseInt(req.query.skip);
      }
    }
    
    if(req.query.limit){
      if (isNaN(parseInt(req.query.limit))){

        res.status(422); 
        throw ('Invalid limit Parameter');
      }
    }

    if(req.query.start){
  
      if (isNaN(parseInt(req.query.start))){

        res.status(422); 
        throw ('Invalid start Parameter');
      }
       else{ 
        skip=parseInt(req.query.start);
      }
    }    

  
    if (id){
      filter._id=id;    
    }

    if(!sort){
      sort='-createdAt';
  
    }

   // console.log (filter);

   //let sort={sort:'createdAt:-1'};
    const patients = await Patient.list({ filter: filter, skip, limit, fields, sort});


   res.json({ success: true, results: patients });


  } catch (err) {
    console.log(err);
     return  res.next(err);
    //next(err);
  }
});

  
  module.exports = router;