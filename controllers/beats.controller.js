const mongoose = require('mongoose');
const { Beat } = require("../models");

module.exports.list = (req, res, next) => {

  Beat.find()
  .populate('author')
  .then((beats) => {
    res.render('beats/list', { beats });
  })
  .catch((error) => next(error));
};



module.exports.detail = (req, res, next) => {
  if(!req.user.admin){
    return res.redirect('/beats')
  }

  Beat.findById(req.params.id)
  .then((beats) => res.render('beats/detail', { beats }))
  .catch((error) => next(error))
};

module.exports.new = (req, res, next) => {
  res.render("beats/new");
};

module.exports.create = (req, res, next) => {
  const beat = {
    ...req.body,
    author: req.user.id,
  };

  beat.audio = req.file.path
  

  Beat.create(beat)
    .then((beat) => res.redirect('/beats'))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        console.error(error);
        res.render('beats/new', { errors: error.errors, beat });
      } else {
        next(error);
      }
    })
};

module.exports.delete = (req, res, next) => {
  Beat.findByIdAndDelete(req.params.id)
  .then(() => res.redirect('/beats'))
  .catch((error) => next(error))
};


module.exports.main = (req, res, next) => {
  res.render('beats/main')
}