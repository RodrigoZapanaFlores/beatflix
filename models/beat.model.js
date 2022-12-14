const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beatSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Title is required',
      minLength: [3, 'Title needs at least 3 chars'] 
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: {
      type: String,
      minLength: [3, 'Description needs at least 3 chars']
    },
    bpms: {
      type: String,
      required: 'Title is required',
      minLength: [3, 'Title needs at least 3 chars'] 
    },
    machine: {
      type: String,
      required: 'Title is required',
      minLength: [3, 'Title needs at least 3 chars'] 
    },

    url: {
      type: String,
      required: 'url process is required',
    },

    audio: {
      type: String,
      
    },
   
});



beatSchema.pre('validate', function (next) {
  this.image = this.image || undefined;
  this.description = this.description || undefined;

  next();
});


const Beat = mongoose.model("Beat", beatSchema);

module.exports = Beat;