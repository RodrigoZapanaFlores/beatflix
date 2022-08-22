const { mongoose } = require('mongoose');
const { Beat } = require("../models");


module.exports.list = (req, res, next) => {
const { title, description ,name} = req.query
const criterial ={};

if(title){
  criterial.title = new RegExp(title, "i");
}


  Beat.find(criterial)
  .populate('author')
  .then((beats) => {
    res.render("beats/list", { beats });
  })
  .catch((error) => next(error));
};


module.exports.myList = (req, res, next) => {

  Beat.find({
    ...req.query,
    author: req.user.id,
  })
  .populate('author')
  .then((beats) => {
    res.render("beats/myList", { beats });
  })
  .catch((error) => next(error));
};



module.exports.detail = (req, res, next) => {
  Beat.findById(req.params.id)
  .populate("author")
  .then((beat) => res.render("beats/detail", { beat }))
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

  beat.audio = req.file.path;
    
//if(req.file){
  //beat.audio = req.file.path;
  //beat.image = req.file.path;
//}

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