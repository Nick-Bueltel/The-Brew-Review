const Brew = require('../models/brew');

module.exports = {
  index,
  show,
  new: newBrew,
  create,

};

function index(req, res) {
  Brew.find({}, function(err, brews) {
    res.render('/index', { title: 'All Brews', brews });
  });
}

function show(req, res) {
  Brew.findById(req.params.id)
//   .populate('brewery').exec(function(err, brews) {
//     // Performer.find({}).where('_id').nin(movie.cast)
//     brewery.find({_id: {$nin: brews.cast}})
//     .exec(function(err, brewery) {
//       console.log(brewery);
//       res.render('/show', {
//         title: 'Brew Detail', brews, brewery
//       });
//     });
//   });
}

function newBrew(req, res) {
  res.render('/new', { title: 'Add Brew Review' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.inProduction = !!req.body.inProduction;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var brews = new Brew(req.body);
  brews.save(function(err) {
    if (err) return res.redirect('/new');
    // res.redirect('/movies');
    res.redirect(`/${brews._id}`);
  });
}


