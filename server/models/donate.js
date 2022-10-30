const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const donateSchema = new Schema({ 
 name: {
    type: String,
    }, 
value : { 
  type: Number,
}
});

const Donate = model('Donate', donateSchema);

module.exports = Donate;
