# Pasos para crear este proyecto

1. Crear carpeta del proyecto
```
# mkdir tailwind-example
# cd tailwind-example
```

2. Crear un proyecto NPM vacío (crea el fichero package.json)
```
# npm init -y
```

3. Instalar dependencia de desarrollo para Tailwind CSS (esto actualiza el fichero package.json)
```
# npm i -D tailwindcss
```

4. Crear el fichero de configuración de Tailwind (tailwind.config.js)
```
# npx tailwindcss init
```

5. Compilar fichero input.css para generar output.css. Para ello editar package.json y añadir las siguientes líneas en la sección scripts:
```
  "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/main.css",
    "build": "tailwindcss -i ./input.css -o ./css/main.css --minify",  // Para producción
    "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch"
  },
```

6. Una vez editado, compilar con (esto genera fichero main.css):
```
# npm run build
```

7. Crear y editar el fichero index.html para empezar con un ejemplo, importando main.css
```
<h1 class="text-3xl">Hello World</h1>
```

8. En lugar de build, usar watch para que reconstruya el proyecto en cada cambio de index.html
```
# npm run watch
```

9. Abrir Live Server (desde menú contextual de index.html o en la parte inferior de VS Code)

10. Cada cambio en index.html se actualiza actualmente en Live Server

11. Instalar plugin "PostCSS Language Support" en VSCode para evitar error en fichero "input.css" con @tailwind.

# Otra información útil

Vídeo "Theming Tailwind with CSS Variables"
https://www.youtube.com/watch?v=MAtaT8BZEAo&t=1158s


# Feature branch
- Master con código limpio y featura código sucio
```
git branch feature_1
```
- Cambiar de rama
```
git checkout feature_1
```
- Crear y cambiar de rama
```
git checkout -b feature_2
```
- Renombrar una rama
```
git branch -m old_name new_name
```
- Borrar una rama
```
git branch -d feature_1
```
- Ayuda del comando branch
```
git branch -h
```
- Añadir todos los archivos modificados
```
git add .
```
- Commit. Poner título del commit y descripción del cambio
```
git commit
```
- Para integrar cambios en rama MASTER (main)...
- primero ir a la rama destino (ej: main o master)
```
git checkout main
```
- y luego hacer merge (esto básicamente mueve el puntero MASTER o MAIN al commit )
```
git merge feature_1
```
- Para fusionar 2 ramas, igual que antes (pueden surgir conflictos)

- Para etiquetar un commit concreto, nos situamos en él con checkout y luego
```
git tag v0.2.0
```

