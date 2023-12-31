const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
})

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;