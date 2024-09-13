//connect to sequalise and then get success

const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;

const initializeSequelize = async () => {
    const sequelize = new Sequelize({
        dialect: 'postgres',
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
    });

    try {   
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');   
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};


module.exports = initializeSequelize;
