//here is the first time we run code so we impot the database helper functions-this could a good time to explain to learners as much as we want how to connect application to database.
const {mongoose, runWithDatabase} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: { type: String },
});



const MagicBag = mongoose.model(‘MagicBag’, magicObject);

const properties = {
	objectType: "cloack" ,
	magicalProperty: "invisibility" ,
	unitCost: 25 ,
	totalUnits: 100
}

runWithDatabase(async () => {
  // Create an entry	
  MagicBag.create(properties)
  // your executable query code goes here
});

