const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Premier League Soccer Data API</title>
    </head>
    <body>
      <h1>Welcome to the Premier League Soccer Data API!</h1>
      <p>Available Endpoints:</p>
      <ul>
        <li><a href="/api/standings">/api/standings</a> - Team Standings</li>
        <li><a href="/api/players">/api/players</a> - Player Stats</li>
        <li><a href="/api/matches">/api/matches</a> - Match Results</li>
      </ul>
    </body>
    </html>
  `);
});

app.use('/api/standings', require('./routes/standings'));
app.use('/api/players', require('./routes/players'));
app.use('/api/matches', require('./routes/matches'));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
