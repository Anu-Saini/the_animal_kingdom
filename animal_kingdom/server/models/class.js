const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const classSchema = new Schema({
  className: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  animals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Animal",
    },
  ],
  about: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
});

const Class = model("Class", classSchema);

module.exports = Class;
