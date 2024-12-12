const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
