# Dashboard App

Este es un proyecto de [Next.js](https://nextjs.org) creado para construir un panel administrativo moderno, utilizando [Tailwind CSS](https://tailwindcss.com) y [Tailwind UI](https://tailwindui.com) para una interfaz limpia, accesible y responsiva.

## 🚀 Comenzando

Primero, instala las dependencias:

```bash
yarn install
```

Luego, inicia el servidor de desarrollo:

```bash
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la aplicación modificando el archivo `app/page.tsx`. Los cambios se actualizan automáticamente.

## 🧱 Tecnologías utilizadas

- **Next.js** — Framework React full stack
- **Tailwind CSS** — Estilizado con clases utilitarias
- **Tailwind UI** — Componentes premium preconstruidos (requiere licencia)
- **Yarn** — Gestor de dependencias

## ⚙️ Variables de entorno

Copia el archivo `.env.template` y renómbralo como `.env` para definir tus variables de entorno:

```bash
cp .env.template .env
```

Asegúrate de completar todas las variables necesarias para que el entorno funcione correctamente.

## 📦 Comandos disponibles

Los siguientes comandos están disponibles en el archivo `package.json`:

| Comando      | Descripción                                     |
| ------------ | ----------------------------------------------- |
| `yarn dev`   | Inicia el servidor en modo desarrollo           |
| `yarn build` | Genera el build de producción                   |
| `yarn start` | Inicia la aplicación con el build generado      |
| `yarn lint`  | Ejecuta el linter para revisar el código fuente |

## 📄 Documentación de tecnologías

- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía oficial de Tailwind CSS](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/components) – componentes preconstruidos
