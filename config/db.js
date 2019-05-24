var mongoose = require('mongoose');

mongoose.createConnection(process.env.DATABASE_URL, { useNewUrlParser: true});
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: external database`);
});

module.exports = mongoose;



