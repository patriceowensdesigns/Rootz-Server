module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        user_id: {
            type: DataTypes.INTEGER
        },
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
    return Order;
};