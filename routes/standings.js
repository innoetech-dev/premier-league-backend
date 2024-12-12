const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find().sort({ position: 1 });
        res.json(teams);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
