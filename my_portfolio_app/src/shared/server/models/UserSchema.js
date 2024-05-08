const { Schema, model } = require('mongoose');

const User = new Schema({
  name: { type: String, unique: false, required: true },
  lastName: { type: String, unique: false, required: true },
  sex: { type: Boolean, unique: false, required: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, minLength: 6 },
  roles: [{ type: String, default: 'Basic', required: true }],
});

module.exports = model('user', User);
