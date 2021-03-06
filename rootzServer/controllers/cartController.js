const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Cart = require('../db').import('../models/cart');

router.post("/add", validateSession, (req, res) => {
    const cartEntry = {
        userId: req.user.id,
        scn: req.body.cart.scn,
        productName: req.body.cart.productName,
        image: req.body.cart.image,
        retailPrice: req.body.cart.retailPrice,
    };
    Cart.create(cartEntry)
        .then((cart) => res.status(200).json(cart))
        .catch((err) => res.status(500).json({ error: err }));
});

router.get("/mine", validateSession, (req, res) => {
    let userId = req.user.id;
    Cart.findAll({
        where: { userId: userId },
    })
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/update/:id", validateSession, function (req, res) {
    const updateCartEntry = {
        // userId: req.user.id,
        // scn: req.body.cart.scn,
        // productName: req.body.cart.productName,
        // image: req.body.cart.image,
        // retailPrice: req.body.cart.retailPrice,
        quantity: req.body.cart.quantity,
    };

    const query = { where: { id: req.params.id } };

    Cart.update(updateCartEntry, query)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/delete/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, userId: req.user.id } };
  
    Cart.destroy(query)
      .then(() => res.status(200).json({ message: "Item Removed from cart" }))
      .catch((err) => res.status(500).json({ error: err }));
});
  
  module.exports = router;