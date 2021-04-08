module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('cart', {
        user_id: {
            type: DataTypes.INTEGER
        },
        scn: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        retailPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    })
    return Cart;
};