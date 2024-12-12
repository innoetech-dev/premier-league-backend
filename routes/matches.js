const express = require('express');
const Match = require('../models/Match');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const matches = await Match.find().sort({ date: 1 });
        res.json(matches);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
