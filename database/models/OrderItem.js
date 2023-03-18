module.exports = function(sequelize, dataTypes) {
    let alias = "OrderItem";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName: "orderItem",
        timestamps: false
    }

    let OrderItem = sequelize.define (alias, cols, config);

    OrderItem.associate = function(models) {
        OrderItem.belongsTo(models.Order, { 
            foreignKey: 'order_id',
            timestamps: false
        }),
        OrderItem.belongsTo(models.Product, { 
            foreignKey: 'product_id',
            timestamps: false
        })    
    }

    return OrderItem;
}