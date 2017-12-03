const {mongoose} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: String,
})

const MagicBag = mongoose.model(‘MagicBag’, magicObject);


