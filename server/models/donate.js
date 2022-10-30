const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const donateSchema = new Schema({ 
 name: {
    type: String,
    }, 
Value : { 
  type: Float 
}
});

const Donate = model('Donate', donateSchema);

module.exports = Donate;
