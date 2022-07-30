const mongoose = require("mongoose");

const Beat = mongoose.model("Beat", {
    title: String,
    description: String,
    author: String,
    image: String,
});

module.exports = Beat;