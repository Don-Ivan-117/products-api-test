import {Sequelize} from 'sequelize-typescript';
import dotenv from 'dotenv'
dotenv.config()

//Base de datos de Render
const db = new Sequelize(process.env.DATABESE_URL!, {
    models: [__dirname + '/../models/**/*.ts'],
    logging: false // evitar los mensajen en consola de Sequelize
});

export default db