//here is the first time we run code so we impot the database helper functions-this could a good time to explain to learners as much as we want how to connect application to database.
const {mongoose, runWithDatabase, seedDatabase} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: {
    type: String,
    required:true
  },
  magicalProperty: {
    type: String, 
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

  // let cloack = await MagicBag.findOne({ objectType: 'cloak' });
  // console.log(`Found one: ${cloack.objectType}`);
  // let cheapObjects = await MagicBag.find({ unitCost: { $lt: 50 }})
  // console.log(`Found ${cheapObjects.length} magic objects`);
});

