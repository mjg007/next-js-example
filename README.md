# next-js-example
Ejemplo básico para comprender una arquitectura de next.js

Paso 1
Ejecutar:
npm init -

Esto nos va a crear un archivo "package.json"

Paso 2
Instalar los siguientes tres paquetes:
npm install next react react-dom
(con solo instalar next, ya tendremos el framework de Next.js).

Paso 3
Creamos una carpeta llamada "pages". Aquí se colocarán las pantallas (archivos) que seran visitados desde el navegador.
Cada .js que creemos dentro de la carpeta pages, next.js los va a tomar como pantallas y las vamos a poder levantar sin necesidad de crear ningún route.

Paso 4
Dentro del "package.json" agregamos el siguiente bloque de código:

  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },

Paso 5
Creamos el archivo "index.js"

Paso 6
npm run dev
Esto nos va a ejecutar el servicio local en el puerto que indica la consola.
