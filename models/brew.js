var mongoose = require('mongoose');

var ratingsSchema = new mongoose.Schema({
    user: String,
    review: String, 
    rating: {type:Number, min: 0, max: 5 },
    
})


var brewSchema = new mongoose.Schema({
    name: String,
    ratings: [ratingsSchema],
    brewery: String, 
    inProduction: Boolean,
    


  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);
  module.exports = mongoose.model('Brew', brewSchema);
  module.exports = mongoose.model('Ratings', ratingsSchema);


