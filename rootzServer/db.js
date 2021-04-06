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
module.exports = sequelize;