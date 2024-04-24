## Creación del proyecto
- Clonar el repositorio
```bash
    git clone https://github.com/LucianoOPM/tasksApi.git 
```
- Una vez clonado el repositorio lo siguiente que tienes que hacer
```
    npm install
```
O
```
    pnpm install
```
Eso instalará las dependencias del proyecto
Una vez que las dependencias ya estén instaladas, deberás crear tus variables de entorno
crea un archivo .env con la base de datos local y un puerto para ser escuchado
```
PORT=Puerto del host
DATABASE_URL=URL DE LA BASE DE DATOS
```

Una vez que ya tengas las variables de entorno configuradas y el puerto configurado, puedes correr el comando para inicializar el proyecto. Esto creara un servidor local.

```
npm run dev
```
o
```
pnpm run dev
```
## Herramientas recomendadas
- [postman](https://www.postman.com/downloads/) es una aplicación util para poder realizar peticiones http a un servidor, se instala en windows
- [thunderclient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) es una extensión de visual studio code, que sirve igual que postman
## Estructura del proyecto
- **app.js**
    Es el módulo principal, ahi se inicializa el servidor y se derivan a las rutas de la API

- **router/index.js**
    Este módulo es el núcleo de las rutas, aqui se centralizan todas las rutas, y dependiendo del endpoint al que se dirigan, te enrutará directamente a tu petición

- **router/home.router.js**
    Esté módulo es el router raíz, se presenta cuando el cliente accede al endpoint raíz del servidor.

- **router/users.router.js**
    Este módulo es el router encargado de manejar todas las peticiones al endpoint /api/users, ya sea con los verbos REST API GET, POST, PUT/PATCH y DELETE

- **router/MainRouter.js**
    Esté módulo es el CORE del router, aqui se realizarán las funcionalidades de todos los endpoint, así como también algunas validaciones de usuarios más adelante.