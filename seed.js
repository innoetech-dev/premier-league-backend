const mongoose = require('mongoose');
const Team = require('./models/Team');
const Player = require('./models/Player');
const Match = require('./models/Match');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const teams = [
    { name: 'Manchester City', position: 1, points: 86, goalsFor: 89, goalsAgainst: 32 },
    { name: 'Arsenal', position: 2, points: 81, goalsFor: 84, goalsAgainst: 38 },
    { name: 'Liverpool', position: 3, points: 75, goalsFor: 78, goalsAgainst: 41 },
    { name: 'Manchester United', position: 4, points: 73, goalsFor: 71, goalsAgainst: 45 },
    { name: 'Chelsea', position: 5, points: 65, goalsFor: 67, goalsAgainst: 50 }
];

const players = [
    { name: 'Erling Haaland', team: 'Manchester City', position: 'Forward', goals: 36, assists: 10 },
    { name: 'Bukayo Saka', team: 'Arsenal', position: 'Forward', goals: 14, assists: 12 },
    { name: 'Mohamed Salah', team: 'Liverpool', position: 'Forward', goals: 19, assists: 8 },
    { name: 'Marcus Rashford', team: 'Manchester United', position: 'Forward', goals: 17, assists: 7 },
    { name: 'Enzo Fernández', team: 'Chelsea', position: 'Midfielder', goals: 2, assists: 5 }
];

const matches = [
    { homeTeam: 'Manchester City', awayTeam: 'Arsenal', date: new Date('2023-04-01'), score: '3-1' },
    { homeTeam: 'Liverpool', awayTeam: 'Chelsea', date: new Date('2023-04-08'), score: '2-2' },
    { homeTeam: 'Manchester United', awayTeam: 'Manchester City', date: new Date('2023-04-15'), score: '1-2' },
    { homeTeam: 'Chelsea', awayTeam: 'Arsenal', date: new Date('2023-04-22'), score: '1-3' },
    { homeTeam: 'Liverpool', awayTeam: 'Manchester United', date: new Date('2023-04-29'), score: '4-0' }
];

const seedDatabase = async () => {
    try {
        await Team.deleteMany({});
        await Player.deleteMany({});
        await Match.deleteMany({});

        await Team.insertMany(teams);
        console.log('Teams seeded successfully');

        await Player.insertMany(players);
        console.log('Players seeded successfully');

        await Match.insertMany(matches);
        console.log('Matches seeded successfully');

        mongoose.connection.close();
    } catch (error) {
        console.error('Seeding Error:', error);
        mongoose.connection.close();
    }
};

seedDatabase();
