var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var ratingsSchema = new Schema({
  user: String,
  review: String, 
  rating: Number,
  
})

var brewSchema = new Schema({
    name: String,
    ratings: [ratingsSchema] ,
    brewery: String, 
    inProduction: Boolean,
    


  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Brew', brewSchema);

