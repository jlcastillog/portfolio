# Portfolio Jose Luis Castillo Gávez

Proyecto de pagina web para mi portfolio profesional usando React.js

## Comenzar el proyecto

```console
npm create vite@latest
```

- Darle el nombre al proyecto "portfolio"
- Usar React
- Usar Javasript
  
```console
cd ./portfolio
npm install
npm install standard -D
```

Add in file package.json:

```json
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
}
```

Add file jsconfig.json

```json
{
    "compilerOptions": {
      "module": "CommonJS",
      "target": "ES6"
    },
    "exclude": ["node_modules"]
}
```

```Consolse
npm install framer-motion
npm install lucide-react
npm install next@latest

npm install -D tailwindcss
npx tailwindcss init
```

Add to src folder: input.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```Console
npx shadcn-ui@latest init

npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add progress
npx shadcn-ui@latest add badge
```

Ejecutar para coger los estilos:

```Console
npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
```

## Delploy in Github pages

Install gh-page tool:

```Console
npm i --save-dev gh-pages
```

Set base in vite.config.js like this:

```js
export default defineConfig({
  base: 'https://jlcastillog.github.io/portfolio/',
  plugins: [react()],
})
```

Add in package.json:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```Console
npm run predeploy
```







