module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        material: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        color: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        dimension: {
            type: dataTypes.TEXT,
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        images: {
            type: dataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        subcategory_id: {
            type: dataTypes.INTEGER,
        },

    }

    let config = {
        tableName: "product",
        timestamps: false
    }

    let Product = sequelize.define (alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id",
            timestamps: false
        })
        Product.belongsToMany(models.Order, { 
            through: "order_product",
            timestamps: false
        });
    }

    return Product;
}