const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
});

const ObjectModel = mongoose.model('Object', objectSchema);

module.exports = ObjectModel;
