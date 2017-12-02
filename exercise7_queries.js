//here is the first time we run code so we impot the database helper functions-this could a good time to explain to learners as much as we want how to connect application to database.
const {mongoose, runWithDatabase, seedDatabase} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: { type: String },
  unitCost: { type: Number },
  magicalProperty: { type: String },
  totalUnits: { type: Number },
});

const MagicBag = mongoose.model('MagicBag', magicObject);

runWithDatabase(async () => {
	await seedDatabase((properties) => MagicBag.create(properties));
  // Create an entry-don't need this right? Because it's already been sent to DB
  // MagicBag.create(properties)

  // let myCloack = MagicBag.findOne({ _id: id })
  // let cloacks = MagicBag.find({ objectType: 'cloack' });

  let cloack = await MagicBag.findOne({ objectType: 'cloack' });

  console.log(`Found one: ${cloack.objectType}`);

  let cheapObjects = await MagicBag.find({ unitCost: { $lt: 50 }})
  // Query goes here? what would it look like?your executable query code goes here
  console.log(`Found ${cheapObjects.length} magic objects`);
});

