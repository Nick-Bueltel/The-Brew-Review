const Brew = require('../models/brew');
require('mongoose');
const utils = require('../utils/utils')


module.exports = {
  index,
  show,
  new: newBrew,
  create,
  delBrew,
  newReview, 
  createReview,
  editReview,
  delReview,
  edit,
  
  
  
  
  
};

function index(req, res) {
  Brew.find({}, function(err, brews) {
    res.render('index', { title: 'The Brew Review', brews, user: req.user, nick: utils.nick});
  });
  
}

function show(req, res) {
  Brew.findById(req.params.id).then(brew => {
    console.log(brew);
    res.render('show', {brew, user: req.user, ratings: brew.ratings} );
   
  })

}

function newBrew(req, res) {
  res.render('new', { title: 'Add Brew Review', user: req.user });
}

function create(req, res) {
  req.body.inProduction = !!req.body.inProduction;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var brews = new Brew(req.body);
  brews.save(function(err) {
    if (err) return res.send(err);
    // res.redirect('/movies');
    res.redirect(`/${brews._id}`);
  });
}

function delBrew(req, res) {
  Brew.findByIdAndDelete(req.params.id).then(brew => {
    console.log(brew);
    brew.save(); 
    res.redirect('/')

  })

}


function delReview(req, res, next) {
  console.log(req.params);
Brew.findById(req.params.id).then(result => {
  console.log(result)
  result.ratings.pull(req.params.id2)
  result.save()
  res.redirect(`/${result.id}`);
}).catch(error => res.send(error))
}

  
function newReview(req, res){
  Brew.findById(req.params.id).then(brew => {
    console.log(brew);
    res.render('newreview', {brew, user: req.user, ratings: brew.ratings});
  })

}

function createReview(req, res){
  Brew.findById(req.params.id, function(err, brews){
    brews.ratings.push(req.body);
    brews.save(function(err){
      res.redirect(`/${brews._id}`);
    })
  })
    
  }
function editReview(req, res){
  Brew.findByIdAndUpdate(req.params.id, req.body, {new: true, user: req.body}, function(err, brew){
    brew.save(function(err){
      if(err) return res.redirect('/');
      res.redirect('/');
    })
  })
}

function edit(req, res){
  Brew.findById(req.params.id, function(err, brew){
    res.render('edit', {brew, user: req.body, ratings: brew.ratings})
  })
}