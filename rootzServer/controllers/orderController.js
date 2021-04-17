const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Order = require('../db').import('../models/order');
// const Cart = require('../db').import('../models/cart')

router.post('/create', validateSession, async (req, res) => {
    try {
        const result = await Order.create ({
            userId: req.user.id,
            email: req.user.email,
            scn: req.body.order.scn,
            productName: req.body.order.productName,
            image: req.body.order.image,
            retailPrice: req.body.order.retailPrice,
        })
    
        res.json(result)

    } catch (err) {
        res.json({ error: err })
    }
});

router.get("/", validateSession, (req, res) => {
    Order.findAll()
        .then(order => res.status(200).json(order))
        .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;