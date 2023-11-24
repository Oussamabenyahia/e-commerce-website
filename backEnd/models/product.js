module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        image: {
            type: DataTypes.BLOB('long'),
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categories: {
            type: DataTypes.ENUM('women', 'men', 'kids'),
            allowNull: false,
        },
       
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        published: {
            type: DataTypes.BOOLEAN
        },
        
    }, {
        freezeTableName: true,
    });

    return Product;
};