# 🍕 Pizzería Mamma Mía! - Resumen de Herramientas (Hito 7)

Este proyecto fue desarrollado utilizando un stack moderno enfocado en componentes, enrutamiento avanzado y gestión de estado global en React.

---

## 🛠️ Herramientas y Tecnologías Utilizadas

* **React 18:** Biblioteca principal para la construcción de interfaces de usuario basadas en componentes reutilizables.
* **React Router DOM (v6):** 
  * Permite la navegación tipo SPA (Single Page Application).
  * `useParams`: Captura parámetros dinámicos de la URL para mostrar el detalle de cada producto (`/pizza/:id`).
  * `Navigate`: Implementa redirecciones automáticas para proteger rutas privadas (`/profile`) y restringir páginas de acceso público (`/login`, `/register`).
* **Context API (React Context):** 
  * `CartContext`: Centraliza y gestiona el estado global del carrito de compras (añadir, sumar, restar y calcular el total en tiempo real).
  * `UserContext`: Administra el estado de autenticación del usuario (`token`) y las acciones de sesión (`logout`).
* **Vite:** Entorno de desarrollo rápido y compilador de código optimizado para React.
* **JavaScript (ES6+) & CSS:** Lógica de programación asíncrona (`async/await` para el consumo de la API REST) y estilos visuales adaptados.
