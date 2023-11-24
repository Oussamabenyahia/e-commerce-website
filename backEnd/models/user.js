module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        userLastname:DataTypes.STRING,
        age: DataTypes.STRING,
        password:DataTypes.STRING,
        email: DataTypes.STRING,
        role: {
            type: DataTypes.ENUM('admin', 'client', 'seller'),
            allowNull: false
        },
        // Other common attributes
    }, {
        freezeTableName: true
    });

    return User;
};

