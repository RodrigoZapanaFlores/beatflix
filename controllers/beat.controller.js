const mongoose = require('mongoose');
const { Beat } = require("../models");

module.exports.list = (req, res, next) => {
  Beat.find(req.query)
  .then((beats) => res.render('beats/list', { beats }))
  .catch((error) => next(error))
};

module.exports.detail = (req, res, next) => {
  Beat.findById(req.params.id)
  .then((beats) => res.render('beats/detail', { beats }))
  .catch((error) => next(error))
};

module.exports.new = (req, res, next) => {
  res.render("beats/new");
};

module.exports.create = (req, res, next) => {
  const data = req.body;

  Beat.create(data)
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