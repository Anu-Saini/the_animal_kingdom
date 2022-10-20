const db = require('../config/connections');
const { Animals } = require('../models');
const { Class } = require('../models');
const { Users } = require('../models');

const animalSeeds = require('./animalSeeds.json');
const classSeeds = require('./classSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Animals.deleteMany({});
    await Class.deleteMany({});
    await Users.deleteMany({});

    await Class.create(classSeeds);
    await Animals.create(animalSeeds);
    await Users.create(userSeeds);
    
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

