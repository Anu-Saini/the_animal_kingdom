const db = require('../config/connections');
const { Animal } = require('../models');
const { Class } = require('../models');
const { User } = require('../models');
const { Donate } = require('../models');

const animalSeeds = require('./animalSeeds.json');
const classSeeds = require('./classSeeds.json');
const userSeeds = require('./userSeeds.json');
const donateSeeds = require('./donateSeeds.json');

db.once('open', async () => {
  try {
    await Animal.deleteMany({});
    await Class.deleteMany({});
    await User.deleteMany({});
    await Donate.deleteMany({});

    await Class.create(classSeeds);
    await Animal.create(animalSeeds);
    await User.create(userSeeds);
    await Donate.create(donateSeeds);
   
    
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

