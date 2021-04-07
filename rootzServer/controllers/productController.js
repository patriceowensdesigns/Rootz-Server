const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Product = require('../db').import('../models/product');

// router.get('/practice', validateSession, function(req, res)
// {
//     res.send ('Hey!! This is a practice route!')
// });

router.post('/create', validateSession, (req, res) => {
    const productEntry = {
        scn: req.body.product.scn,
        productName: req.body.product.productName,
        image: req.body.product.image,
        retailPrice: req.body.product.retailPrice,
        onHand: req.body.product.onHand
    }
    Product.create(productEntry)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router


