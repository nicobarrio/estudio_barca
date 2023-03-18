module.exports = function(sequelize, dataTypes) {
    let alias = "User";

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
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "user",
        timestamps: false
    }

    let User = sequelize.define (alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Order, {
            as: "users",
            foreignKey: "user_id",
            timestamps: false
        })
    }

    return User;
}