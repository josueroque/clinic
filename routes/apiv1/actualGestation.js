"use strict";

const express = require("express");
const router = express.Router();
const ActualGestation = require("../../models/ActualGestation");

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const fields = req.query.fields;
    let sort = req.query.sort;
    const start = req.query.start;

    let skip;

    const filter = {};

    if (id) {
      filter.idNumber = id;
    } else {
      throw new Error("You must provide an id");
    }

    const actualGestation = await ActualGestation.list({ filter: filter });

    res.json({
      success: true,
      req_query: req.query,
      params: req.params,
      filter: filter,
      results: actualGestation,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      req_query: req.query,
      params: req.params,
      results: err,
    });
    //next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let data = req.body;
    const _id = req.params.id;
    data.updatedAt = Date.now();
    const actualGestationUpdated = await ActualGestation.findOneAndUpdate(
      { _id: _id },
      data,
      { new: true }
    ).exec();
    res.json({ success: true, result: actualGestationUpdated });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let data = req.body;
    data.createdAt = Date.now();
    const actualGestation = new ActualGestation(data);
    console.log(data);
    const actualGestationSaved = await actualGestation.save();
    res.json({ success: true, result: actualGestationSaved });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    await ActualGestion.deleteOne({ _id: _id }).exec();
    res.json({ success: true, result: "gestation deleted!" });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
