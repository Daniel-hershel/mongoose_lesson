// const {runWithDatabase} = require('./database');
const {mongoose} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: String,
})


const magicBag = mongoose.model(‘magicBag’, magicObject):

