module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        scn: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        retailPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        onHand: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Product;
};