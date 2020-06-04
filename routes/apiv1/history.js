'use strict';

const express = require('express');
const router = express.Router();
const History = require('../../models/History');

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