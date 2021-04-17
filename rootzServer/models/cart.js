module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('cart', {
        scn: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
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
    return Cart;
};