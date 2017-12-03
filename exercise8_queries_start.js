//here is the first time we run code so we impot the database helper functions-this could a good time to explain to learners as much as we want how to connect application to database.
const {mongoose, runWithDatabase, seedDatabase} = require('./database');

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
  totalUnits: {
    type: Number,
    required: true
  }

});

const MagicBag = mongoose.model('MagicBag', magicObject);


runWithDatabase(async () => {
	await seedDatabase((properties) => MagicBag.create(properties));

});

