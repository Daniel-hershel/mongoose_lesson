//first time we are using runWithDatabase so we now import here and could call learners attention to it and the funtction we call and wrap our queries and method calls in below
const {mongoose, runWithDatabase} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: {
    type: String,
    required:true
  },
  magicalProperty: {
    type: String 
    required: true
  },
  unitCost: {
    type: Number,
    required: true
  },
  unitsLeft: {
    type: Number,
    required: true
  }

});


const MagicBag = mongoose.model(‘MagicBag’, magicObject);


runWithDatabase(async () => {
  // Create an entry  here 
  
});