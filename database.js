const MAGIC_OBJECTS = require('./seeds');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const databaseUrl = process.env.DATABASE_URL || `mongodb://localhost/learn-mongoose_${env}`;

const options= {
  useMongoClient: true,
};

const connect = async () => {
  await mongoose.connect(databaseUrl, options);
}

const drop = async () => {
  await mongoose.connection.db.dropDatabase();
};

const disconnect = async () => {
  await mongoose.disconnect();
};

const seedDatabase = async (callback) => {
    await mongoose.connection.db.dropDatabase();

  const promises = MAGIC_OBJECTS.map((properties) => callback(properties));
 
  return Promise.all(promises);
}

const runWithDatabase = async (runWhileConnected) => {
  await connect();
  await runWhileConnected();
  await disconnect();
};

module.exports = {
  mongoose,
  runWithDatabase,
  seedDatabase,
};
