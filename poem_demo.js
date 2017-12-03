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

const poem = new mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  stanzas: {
    type: String, 
    required: true
  },
  published: {
    type: Boolean,
    required: true
  }

});
// const MagicBag = mongoose.model('MagicBag', magicObject);


//applied to the model
poem.statics.alphabetical = function(callback) {
  return this.findOne({}).sort('title').exec(callback);
}

// const properties = {
//   title: "Rewrite Reality" , 
//   stanzas: ["Re-imagine the consumption of the stagnant status quo", "No matter how nice you dress", "The emperor is still wearing no clothes"],
//   published: "false" ,

// }

const Poem = mongoose.model('Poem', poem);


runWithDatabase(async () => {

  await seedDatabase((properties) => Poem.create(properties));

const firstAlpha = await Poem.alphabetical();

  console.log(`The first poem alphabetically is: ${firstAlpha.title}. It goes like this: ${'\n'} ${firstAlpha.stanzas}`);


  // console.log(`The ${mostExpensive.objectType} started with ${mostExpensive.totalUnits} charges.`);

  // console.log(`Using ${mostExpensive.objectType}...`)
  
  // await mostExpensive.use();

  // console.log(`The ${mostExpensive.objectType} has ${mostExpensive.totalUnits} charges left.`);


   // let testThing = await Poem.findOne({ title: 'Phasing' });
   // console.log(`Found one: ${testThing.published}`);

   // let publishedPoems = await Poem.find({ published: true })

   // console.log(`Published Poems: ${publishedPoems.length}`)
});


