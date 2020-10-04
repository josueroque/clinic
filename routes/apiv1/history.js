'use strict';

const express = require('express');
const router = express.Router();
const History = require('../../models/History');

router.get('/:id',async (req, res, next) => {

  try {

    const id=req.params.id;
    const fields = req.query.fields;
    let sort = req.query.sort;

    const start =req.query.start;
        
    let skip;
    
    console.log(req.query);

    let filter = {};
    
  
    if (id){
      filter._id=id;    
    }

 
    const history = await History.list({ filter: filter  });
    

    res.json({ success: true,req_query:req.query,params:req.params, results: history });


  } catch (err) {
    console.log(err);
     return  res.next(err);
    //next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    let data = req.body;
    const _id=req.params.id;
    data.updatedAt=Date.now();
    console.log(req.body);
    //const history = new History(data);
    const historyUpdated = await History.findOneAndUpdate({_id: _id}, data, { new: true }).exec();
    console.log("new version");
    res.json({ success: true ,result: historyUpdated });

  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let data = req.body;
    console.log(data);
    data.createdAt=Date.now();
    const history = new History(data);
    const historySaved = await history.save();
    res.json({ success: true, result: historySaved });

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

module.exports=router;