const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Order = require('../db').import('../models/order');

router.get("/", validateSession, (req, res) => {
    Order.findAll()
        .then(order => res.status(200).json(order))
        .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;