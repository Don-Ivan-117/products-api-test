import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from 'swagger-ui-express'

const options: swaggerJSDoc.Options = {
    swaggerDefinition : {
        openapi: '3.0.2',
        tags : [
            {
                name: 'Products',
                description : 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for products'
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options);



// Estilos
const swaggerUiOptions: SwaggerUiOptions = {
    customSiteTitle: "Products (API) - Documentación Express / TypeScript",
    customfavIcon: "/public/tite.svg", // ✅ Ruta accesible desde el navegador
    customCss: `
        .swagger-ui .topbar {
            background-color: #63a3eb;
        }
        .swagger-ui .topbar-wrapper svg {
            display: none !important; /* Ocultar el SVG de swagger */
        }
        .swagger-ui .topbar-wrapper .link:before {
            content: "";
            display: inline-block;
            background: url('/public/tite.svg') no-repeat center;
            background-size: contain;
            width: 120px;
            height: 40px;
        }
        .swagger-ui .topbar-wrapper .link::after {
        content: "I.IV∆N";
        font-weight: 100%;
        font-size: 1.1rem;
        color: #ffffff;
        vertical-align: middle;
        display: inline-block;
        margin-left: 8px;
        letter-spacing: 0.5px;
        }
    `,
};



// Exportaciones
export default swaggerSpec
export {swaggerUiOptions}