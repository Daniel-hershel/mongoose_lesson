const {mongoose} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: String,
})
