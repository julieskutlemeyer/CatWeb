const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');

router.get('/cat', (req, res, next) => {

  Cat.find({})
    .then(data => res.json(data))
    .catch(next)
});

router.post('/cat', (req, res, next) => {
  if(req.body.name){
    Cat.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/cat/:id', (req, res, next) => {
  Cat.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;
