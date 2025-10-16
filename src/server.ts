import colors from 'colors';
import db from './config/db';
import express from 'express';
import router from './router';
import swaggerSpec, { swaggerUiOptions } from './config/swagger';
import swaggerUi from 'swagger-ui-express'

// Conectar a la base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue.bold("Conexion exitosa a la base de datos"));
    } catch (error) {
        console.log(error);
        console.log(colors.red.bold("Hubo un error al conectar a la base de datos"));
    }
}

connectDB();

const server = express();

// Leer datos de formularios
server.use(express.json());

// .use engloba todos los metodos HTTP, por eso soporta (get,post,put...). Tambien se puede colocar un prefijo global para todas las rutas que ahi se ejecuten
server.use('/api/products', router);

// --- Documentacion ---

// Swagger UI solo puede acceder a archivos servidos estáticamente.(Nada impresindible, permite acceder a tus archivos estáticos desde http://localhost:3000/public/tite.svg)
server.use('/public', express.static('src/public'));

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server