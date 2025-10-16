# 📦 Products API Test

Este es un proyecto de prueba que implementa una **API RESTful** para la gestión de productos. Se desarrolló con el objetivo de demostrar buenas prácticas en el diseño de APIs, la **separación de responsabilidades** (MVC o similar) y la **integración con documentación Swagger**.

## 🚀 Empezando

Sigue estos pasos para obtener una copia local del proyecto en funcionamiento.

***

### ⚙️ Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

* **Node.js** (versión recomendada: v18 o superior)
* **npm** (viene con Node.js)
* **Git**

***

### 🛠️ Ejecución del proyecto

Sigue estos pasos para poner el servidor en marcha:

1.  **Clona el repositorio**
    ```bash
    git clone [https://github.com/Don-Ivan-117/products-api-test.git](https://github.com/Don-Ivan-117/products-api-test.git)
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
* *(Opcional: Añadir aquí cualquier otra tecnología clave, ej: TypeScript, Mongoose, TypeORM, etc.)*

***

## 👤 Autor

* **Tu Nombre o Alias** - [Tu Perfil de GitHub (ej. @Don-Ivan-117)]
    *(Opcional: Enlace a tu Portafolio o LinkedIn)*

***

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE.md](LICENSE.md) para más detalles.
   
   


   
