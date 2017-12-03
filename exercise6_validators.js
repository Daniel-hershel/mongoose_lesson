const {mongoose} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: {
    type: String,
  },
  magicalProperty: {
    type: String 
  },
  unitCost: {
    type: Number,
  },
  unitsLeft: {
    type: Number,
  }

})


const MagicBag = mongoose.model(‘MagicBag’, magicObject);


