module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        email: {
            type: DataTypes.STRING,
        },
        scn: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        retailPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    })
    return Order;
};