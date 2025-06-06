# AppPizzas 🍕

Aplicación web frontend para la gestión y compra de pizzas, desarrollada con React. Permite a los usuarios explorar el menú, agregar/quitar productos al carrito, visualizar ingredientes de las pizzas y simular la compra, utilizando datos locales en formato JSON.

---

## Características principales

- **Frontend en React**
  - Mensaje de bienvenida al iniciar la app para mejorar la experiencia del usuario.
  - Visualización de pizzas desde archivo JSON local
  - Carrito de compras gestionado en el estado de la app y localStorage
  - Navegación SPA con React Router
  - Estilos personalizados y responsive
  - Feedback visual al agregar/quitar productos

---

## Estructura del proyecto

```
AppPizzas/
│
├── src/                    # Frontend React
│   ├── componentes/        # Componentes reutilizables (Menu, Pizza, Carrito, Navbar, etc.)
│   ├── data/pizzas.json    # Archivo local con los datos de las pizzas
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

### 3. Ejecuta el frontend

```sh
npm start
```

La app estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Notas técnicas y buenas prácticas

- El frontend consume los datos de pizzas desde `src/data/pizzas.json`.
- El estado del carrito se guarda en localStorage para persistencia entre sesiones.
- El proyecto está preparado para escalar: puedes agregar backend, autenticación, pagos, etc. en futuras ramas.

---

## Créditos

- Desarrollado por Ezequiel Sanchez como proyecto de práctica frontend.

---


