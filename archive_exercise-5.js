const Dinosaur = require('./models/dinosaur');
const {runWithDatabase} = require('./database');

runWithDatabase(async () => {
  const triceratops = await Dinosaur.create({
    name: 'Triceratops',
    count: 3,
    risk: 'Low',
  });
   
  console.log(`Created: ${triceratops.count} ${triceratops.risk} risk ${triceratops.name}`);
});
