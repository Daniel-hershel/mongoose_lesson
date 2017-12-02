// const {runWithDatabase} = require('./database');
const {mongoose} = require('./database');

const magicObject = new mongoose.Schema({
  objectType: String,
})


const magicBag = mongoose.model(‘magicBag’, magicObject):


// runWithDatabase(async () => {
//   const allDinos = await Dinosaur.find();

//   console.log('Listing all the Dinosaurs we have:');

//   allDinos.forEach(dino => {
//     console.log(` * ${dino.count} ${dino.risk} risk ${dino.name}`);
//   });
// });
