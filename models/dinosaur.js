const {mongoose} = require('../database');

const Schema = mongoose.Schema;

const validator = function(val) {
  if (this.risk === 'High') {
    return val <= 10;
  }
  else {
    return true;
  }
};

const DinosaurSchema = new Schema(
  {
    name: {type: String, required: true},
    count: {
      type: Number,
      validate: [validator, 'Cannot hold more than 10 risky dinosaurs.']
    },
    risk: {type: String}
  }
);

DinosaurSchema.methods.breed = function(cb) {
  this.count = this.count + 1;
};

DinosaurSchema.statics.findByName = function(name, cb) {
  return this.findOne({ name: name }, cb);
};

module.exports = mongoose.model('Dinosaur', DinosaurSchema);
