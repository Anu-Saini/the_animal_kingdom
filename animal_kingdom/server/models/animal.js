const { Schema, model } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const animalSchema = new Schema({ 
 animalName: {
    type: String,
    // required: 'You need to leave a thought!',
    required: true,
    unique:true,
    // minlength: 1,
    // maxlength: 280,
    trim: true,
  },
  otherName: {
    type: String,
    trim: true,
  },
  family: {
  type: String,
  required: true,
  trim: true,
},
 age: {
  type: String,
  required: true,
 },
foods : {
 type: String,
 trim: true,
},
population : {
 type: String,
 trim: true,
},
image :[
   {
  type: String,
  trim: true,
 }
],

threats : {
 type: String,
 trim: true,
},
location : [
 {
 type: String,
 trim: true,
},
],
description : {
 type: String,
 required: true,
 minlength: 1,
 maxlength: 7000,
 trim: true,
},
submitBy : {
 type: Schema.Types.ObjectId,
 ref: 'user'
},
submitOn: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
editedBy: {
  type: Schema.Types.ObjectId,
  ref: 'user'
   },
  editedOn: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  });

const Animals = model('animal', animalSchema);

module.exports = Animals;
