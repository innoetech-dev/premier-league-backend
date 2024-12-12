const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: String,
    team: String,
    position: String,
    goals: Number,
    assists: Number
});

module.exports = mongoose.model('Player', PlayerSchema);
