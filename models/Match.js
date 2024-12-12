const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    homeTeam: String,
    awayTeam: String,
    date: Date,
    score: String
});

module.exports = mongoose.model('Match', MatchSchema);
