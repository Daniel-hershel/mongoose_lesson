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

magicObject.statics.findOneCheapest = function(callback) {
  return this.findOne({}).sort('unitCost').exec(callback);
}

magicObject.methods.use = function(callback) {
  this.totalUnits = this.totalUnits - this.unitCost;

  return this.save();
}


const MagicBag = mongoose.model('MagicBag', magicObject);

runWithDatabase(async () => {
	await seedDatabase((properties) => MagicBag.create(properties));

	const mostExpensive = await MagicBag.findOneCheapest();

	console.log(`The most expensive object is the ${mostExpensive.objectType}`);

	console.log(`The ${mostExpensive.objectType} started with ${mostExpensive.totalUnits} charges.`);

	console.log(`Using ${mostExpensive.objectType}...`)
	
	await mostExpensive.use();

	console.log(`The ${mostExpensive.objectType} has ${mostExpensive.totalUnits} charges left.`);
});

