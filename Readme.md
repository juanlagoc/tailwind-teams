Pasos para crear este proyecto

1) Crear carpeta del proyecto
# mkdir tailwind-example
# cd tailwind-example

2) Crear un proyecto NPM vacío (crea el fichero package.json)
# npm init -y

3) Instalar dependencia de desarrollo para Tailwind CSS (esto actualiza el fichero package.json)
# npm i -D tailwindcss

4) Crear el fichero de configuración de Tailwind (tailwind.config.js)
# npx tailwindcss init

5) Compilar fichero input.css para generar output.css. Para ello editar package.json y añadir las siguientes líneas en la sección scripts:
  "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/main.css",
    "build": "tailwindcss -i ./input.css -o ./css/main.css --minify",  // Para producción
    "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch"
  },

6) Una vez editado, compilar con (esto genera fichero main.css):
# npm run build

6) Crear y editar el fichero index.html para empezar con un ejemplo, importando main.css
<h1 class="text-3xl">Hello World</h1>

7) En lugar de build, usar watch para que reconstruya el proyecto en cada cambio de index.html
# npm run watch

8) Abrir Live Server (desde menú contextual de index.html o en la parte inferior de VS Code)

9) Cada cambio en index.html se actualiza actualmente en Live Server

10) Instalar plugin "PostCSS Language Support" en VSCode para evitar error en fichero "input.css" con @tailwind.