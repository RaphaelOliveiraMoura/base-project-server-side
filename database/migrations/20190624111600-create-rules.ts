import {
    QueryInterface,
    DataTypes,
    Sequelize
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.createTable('rules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

            name: {
                allowNull: false,
                type: DataTypes.STRING
            },

            description: {
                allowNull: false,
                type: DataTypes.STRING
            },

            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            },

            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            }
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.dropTable('rules');
    }
};
