var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkSchema = new Schema({
  url: String,
  description: String
});

module.exports = mongoose.model('Link', LinkSchema);