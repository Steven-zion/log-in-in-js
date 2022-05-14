
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    userName: {type: string, required: true, unique: true},
    password: { type: string, required: true}
    },
    {collection: 'users'}
);

const model = mongoose.model('userSchema', userSchema);

module.exports = model;

