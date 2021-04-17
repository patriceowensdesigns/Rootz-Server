const Sequelize = require('sequelize');
const sequelize = new Sequelize('Rootz-Server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then (
    function() {
        console.log('Connected to Rootz-Server postgres database');
    },
    function(err){
        console.log(err);
    }
);

User = sequelize.import('./models/user');
Product = sequelize.import('./models/product');
Cart = sequelize.import('./models/cart');
Order = sequelize.import('./models/order');

// User.hasMany(Product);
// Product.belongsTo(User);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(Product);
Product.belongsTo(Cart);

User.hasMany(Order);
Order.belongsTo(User);

// Order.hasMany(Cart);
// Cart.belongsTo(Order);

// Order.hasMany(Product);
// Product.belongsTo(Order);


module.exports = sequelize;