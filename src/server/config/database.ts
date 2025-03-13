import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql'
  logging: false, // Set to true for SQL query logging
});

export default sequelize;