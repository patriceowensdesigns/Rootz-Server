let express = require('express');
let app = express();
let sequelize = require('./db');


let user = require('./controllers/userController');
let product = require('./controllers/productController');

sequelize.sync();
//sequelize.sync({force: true})

app.use(express.json());

app.use('/user', user);
app.use('/product', product);

app.listen(3000, function(){
    console.log('App is listening on **PORT 3000**');
})