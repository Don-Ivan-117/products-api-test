# 🧪 products-api-test

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

---

Laboratorio backend diseñado para **explorar y dominar** el ciclo completo de vida de una **API RESTful** centrada en la gestión de productos.

Este proyecto se enfoca en las siguientes buenas prácticas:
* **Diseño de Endpoints:** Definición clara de rutas siguiendo principios REST.
* **Modelado y ORM:** Uso de **Sequelize** para la gestión robusta de la base de datos.
* **Pruebas (TDD/Unitarias):** Implementación de tests con **Jest** y **Supertest**.
* **Documentación Interactiva:** Generación automática de documentación con **Swagger**.

## 🎯 Objetivo del Proyecto

Este repositorio actúa como un **entorno de práctica** y *sandbox* (caja de arena) para entender el flujo de trabajo de una API. No está pensado para producción, sino como espacio de aprendizaje y experimentación para:

1.  Modelado de datos y relaciones.
2.  Implementación de validaciones y lógica de negocio.
3.  Desarrollo de pruebas unitarias y de integración.
4.  Generación de documentación técnica accesible.

---

## 🚀 Tecnologías Clave

| Tecnología | Descripción |
| :--- | :--- |
| **Express** | Framework fundamental para construir el servidor y definir las rutas de la API. |
| **Sequelize** | ORM (Object-Relational Mapper) utilizado para modelar, interactuar y gestionar la base de datos. |
| **Jest + Supertest** | Herramientas esenciales para la creación y ejecución de pruebas unitarias y de integración de endpoints. |
| **Swagger** | Herramienta para generar documentación interactiva y visual de todos los *endpoints* disponibles. |

---

## ⚙️ Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

* **Node.js** (versión recomendada: v18 o superior)
* **npm** (viene con Node.js)
* **Git**

***

### 🛠️ Ejecución del proyecto

Sigue estos pasos para poner el servidor en marcha:

1.  **Clona el repositorio**
    ```bash
    git clone https://github.com/Don-Ivan-117/products-api-test.git
    cd products-api-test
    ```

2.  **Instala las dependencias**
    ```bash
    npm install
    ```

3.  **Configuración de la Base de Datos**
    (Ver la sección [🗄️ Base de datos](#base-de-datos) para más detalles.)
    Crea un archivo de entorno (`.env`) y configura las variables necesarias.

4.  **Ejecuta el servidor**
    ```bash
    npm run dev
    ```
    El servidor se ejecutará por defecto en `http://localhost:4000`.

***

### 📄 Acceso a la Documentación (Swagger)

Una vez que el servidor esté activo, puedes acceder a la documentación interactiva de la API en:

* **Documentación Swagger**
    ```
    http://localhost:4000/docs
    ```
    Aquí podrás ver todos los *endpoints* disponibles y probar las peticiones directamente.

***

## 🗄️ Base de datos

El proyecto está configurado para conectarse a una base de datos a través de una API externa (o un servicio de base de datos *self-hosted*).

### Configuración de Conexión

Por motivos de seguridad y portabilidad, las credenciales y detalles de conexión **no se incluyen** en este repositorio.

Si deseas ejecutar el proyecto localmente, debes:

1.  **Crear tu propia base de datos** (por ejemplo, PostgreSQL, MySQL, etc., dependiendo de la configuración interna).
2.  **Configurar tus variables de entorno** (en un archivo `.env` en la raíz del proyecto).
3.  **Ajustar la configuración** del conector si es necesario en el archivo:
    ```
    src/config/db.ts
    ```
    Utiliza tus propias variables de entorno para la conexión (ej. `DB_HOST`, `DB_USER`, `DB_PASSWORD`).

***

## 💡 Tecnologías Utilizadas

* **Node.js** - Entorno de ejecución
* **Express.js** - Framework web para Node.js
* **Swagger/OpenAPI** - Documentación de la API
* **TypeScript** - Superset de JavaScript que añade tipado estático y mejora la mantenibilidad del código

***

## 👤 Autor

* **Tu Nombre o Alias** - [Tu Perfil de GitHub (ej. @Don-Ivan-117)]
    *(Opcional: Enlace a tu Portafolio o LinkedIn)*

***

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE.md](LICENSE.md) para más detalles.
   
   


   
