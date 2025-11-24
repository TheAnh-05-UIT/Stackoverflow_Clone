const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

const config = require("./index");

dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.DATABASE_PORT,
        dialect: "mysql",
        define: { timestamps: false },
        pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
        logging: false,
    }
);

(async () => {
    await sequelize.sync();
})();

module.exports = sequelize;

// const sequelize = new Sequelize(config.DB.DATABASE, config.DB.USER, config.DB.PASSWORD,
//   {
//     dialect: 'mysql',
//     host: config.DB.HOST,
//     port: config.DB.PORT,
//     define: {
//       timestamps: false,
//     },
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//     logging: false
//   });
