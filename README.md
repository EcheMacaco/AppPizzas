# AppPizzas 🍕

Aplicación web fullstack para la gestión y compra de pizzas, desarrollada con React (frontend), Node.js + Express (backend) y MongoDB (base de datos). Permite a los usuarios explorar el menú, agregar/quitar productos al carrito y simular la compra, con persistencia real en base de datos.

---

## Características principales

- **Frontend en React**

  - Visualización de pizzas desde base de datos
  - Carrito de compras sincronizado con backend
  - Navegación SPA con React Router
  - Estilos personalizados y responsive
  - Feedback visual al agregar/quitar productos

- **Backend en Node.js + Express**

  - API RESTful para pizzas, carritos, órdenes y usuarios
  - Conexión a MongoDB con Mongoose
  - Endpoints para CRUD de pizzas, gestión de carritos y órdenes
  - Estructura modular y escalable

- **Base de datos MongoDB**
  - Almacena pizzas, carritos, órdenes y usuarios
  - Seed automático desde archivo JSON para poblar pizzas

---

## Estructura del proyecto

```
AppPizzas/
│
├── backend/                # Backend Node.js/Express
│   ├── models/             # Modelos Mongoose (Pizza, Usuario, Carrito, Orden)
│   ├── routes/             # Rutas Express (pizzas, usuarios, carrito, ordenes)
│   ├── seedFromJson.js     # Script para poblar MongoDB desde JSON
│   ├── app.js              # Entrada principal del backend
│   └── .env                # Variables de entorno (MONGO_URI)
│
├── src/                    # Frontend React
│   ├── componentes/        # Componentes reutilizables (Menu, Pizza, Carrito, Navbar, etc.)
│   ├── data/pizzas.json    # Archivo de ejemplo para poblar la base de datos
│   └── App.jsx             # Componente principal
│
├── package.json            # Configuración del frontend
└── README.md               # Este archivo
```

---

## Instalación y ejecución

### 1. Clona el repositorio

```sh
git clone https://github.com/EcheMacaco/AppPizzas.git
cd AppPizzas
```

### 2. Instala dependencias del frontend

```sh
npm install
```

### 3. Configura y ejecuta el backend

```sh
cd backend
npm install
# Configura tu .env con la URI de MongoDB
# Ejemplo:
# MONGO_URI=mongodb://localhost:27017/app_pizzas
node seedFromJson.js   # Pobla la base de datos con pizzas de ejemplo
npm run dev            # Inicia el backend en puerto 4000
```

### 4. Ejecuta el frontend

```sh
cd ..
npm start
```

La app estará disponible en [http://localhost:3000](http://localhost:3000) y el backend en [http://localhost:4000](http://localhost:4000).

---

## Endpoints principales del backend

- `GET    /api/pizzas` → Lista todas las pizzas
- `GET    /api/carrito/:usuarioId` → Obtiene el carrito de un usuario
- `PUT    /api/carrito/:usuarioId` → Actualiza el carrito de un usuario
- `POST   /api/ordenes` → Crea una orden de compra
- `POST   /api/usuarios/register` → Registra un usuario (básico)
- `POST   /api/usuarios/login` → Login de usuario (básico)

---

## Notas técnicas y buenas prácticas

- El frontend consume la API del backend usando fetch/async.
- El estado del carrito se sincroniza siempre con el backend.
- El backend responde siempre con `{ items: [...] }` para el carrito.
- El seed de pizzas se puede actualizar editando `src/data/pizzas.json` y ejecutando `node backend/seedFromJson.js`.
- El proyecto está preparado para escalar: puedes agregar autenticación real, pagos, panel de administración, etc.

---

## Créditos y agradecimientos

- Desarrollado por Ezequiel Sanchez como proyecto de práctica fullstack.


