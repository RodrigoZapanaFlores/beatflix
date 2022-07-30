const Beat = require("../models/beat.model");

module.exports.list = (req, res, next) => {
  Beat.find(req.query).then((beats) => {
    res.render("beats/list", { beats });
  });
};

module.exports.detail = (req, res, next) => {
  Beat.findById(req.params.id).then((beat) => {
    res.render("beats/detail", { beat });
  });
};

module.exports.new = (req, res, next) => {
  res.render("beats/new");
};

module.exports.create = (req, res, next) => {
  const data = req.body;

  Beat.create(data).then((beat) => {
    res.redirect("/beats");
  });
};

module.exports.delete = (req, res, next) => {
  Beat.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/beats");
  });
};
