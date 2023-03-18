module.exports = function(sequelize, dataTypes) {
    let alias = "Order";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL
        }
    }

    let config = {
        tableName: "order",
        timestamps: false
    }

    let Order = sequelize.define (alias, cols, config);

    Order.associate = function(models) {
        Order.belongsTo(models.User, {
            as: "orders",
            foreignKey: "user_id",
            timestamps: false
        }),
        Order.belongsToMany(models.Product, { 
            through: "order_id"
        });
    }

    return Order;
}