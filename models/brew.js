var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var ratingsSchema = new Schema({
  user: String,
  review: String, 
  rating: {type:Number, min: 0, max: 5 },
  
})

var brewSchema = new Schema({
    name: String,
    ratings: [ratingsSchema] ,
    brewery: String, 
    inProduction: String,
    


  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Brew', brewSchema);

