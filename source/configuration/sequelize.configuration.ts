import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

const modelsPath = __dirname.split('/configuration')[0] + '/models/**/*.model.js';

const sequelize: Sequelize = new Sequelize({
    database: 'dev_db',
    dialect: 'mysql',
    username: 'root',
    operatorsAliases: Op,
    password: 'root',
    host: '127.0.0.1',
    storage: __dirname + '/database/mysql',
    modelPaths: [modelsPath]
});

export default sequelize;