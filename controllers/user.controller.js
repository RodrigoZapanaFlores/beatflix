const { User, Beat } = require("../models")

module.exports.userDetail = (req, res, next) => {
    User.findById(req.params.id)
      .populate("beats")
      .then((user) => {
        if (user) {
          res.render("users/userDetail", { user });
        } else {
          res.redirect("/beats");
        }
      })
      .catch((err) => next(err));
  };
  
  module.exports.confirm = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, { confirmed: true })
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  };

