require("dotenv").config();
const express = require('express');
const app = express();
const sequelize = require('./db');


const user = require('./controllers/userController');
const product = require('./controllers/productController');
const cart = require('./controllers/cartController');
const order = require('./controllers/orderController');

sequelize.sync();
// sequelize.sync({force: true})

app.use(express.json());

app.use('/user', user);

app.use('/product', product);

app.use('/cart', cart);

app.use('/order', order);

app.listen(3000, function(){
    console.log('App is listening on **PORT 3000**');
})