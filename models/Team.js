const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: String,
    position: Number,
    points: Number,
    goalsFor: Number,
    goalsAgainst: Number
});

module.exports = mongoose.model('Team', TeamSchema);
