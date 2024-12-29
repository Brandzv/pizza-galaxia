# Pizza Galaxia

![Inicio](https://github.com/Brandzv/pizza-galaxia/blob/main/src/assets/inicio.png)

## Descripción

Este proyecto es una página web interactiva que simula la compra de productos en una pizzería. Utiliza el almacenamiento local para guardar la ubicación ingresada y los productos seleccionados, para ser mostrados posteriormente.

## ⚙️ Tecnologías Utilizadas

[![NPM][npm-badge]][npm-url]
[![Astro][astro-badge]][astro-url]
[![TailwindCSS][tailwind-badge]][tailwind-url]

[npm-url]: https://www.npmjs.com/
[npm-badge]: https://img.shields.io/badge/NPM-v10.8.2-orange?style=for-the-badge&logo=npm
[astro-url]: https://astro.build/
[astro-badge]: https://img.shields.io/badge/Astro-v4.15.5-blue?style=for-the-badge&logo=astro
[tailwind-url]: https://tailwindcss.com/
[tailwind-badge]: https://img.shields.io/badge/TailwindCSS-v3.4.11-06B6D4?style=for-the-badge&logo=tailwindcss

## 📋 Prerrequisitos

-   Node.js (versión 20.18.0)
-   Npm (versión 10.8.2)

## 🛠️ Instalación

1. Clona el repositorio

```
git clone https://github.com/Brandzv/pizza-galaxia.git
cd pizza-galaxia
```

2. Instala las dependencias

```
npm install
```

3. Despliega el servidor en local

```
npm run dev
```

El proyecto estará disponible en http://localhost:4321/

## 💻 Uso

```
src/pages/
├── index.astro          // Ruta: /
├── location.astro       // Ruta: /location
├── choose-menu.astro    // Ruta: /choose-menu
├── about.astro          // Ruta: /about
├── contact.astro        // Ruta: /contact
└── cart.astro           // Ruta: /cart
```

### Descripción de páginas

#### Página principal (`/`)

-   Interfaz principal con dos botones con redirección a la página `/location`.
-   Sección con efecto parallax sobre imagen de una galaxia.
-   Menú ubicado al final de la página, mostrando las opciones disponibles con su precio.

#### Ubicación (`/location`)

-   Campo de entrada para que el usuario ingrese su ciudad.
-   Interfaz minimalista centrada en el ingreso de la ubicación.

#### Seleccionar productos (`/choose-menu`)

-   Dirección ingresada por el usuario en la parte superior.
-   Catálogo de productos presentado en cards, cada una mostrando:
    -   Imagen del producto.
    -   Nombre del producto.
    -   Precio.
    -   Botón de "Comprar" para cada producto.
-   Botón flotante para acceder al carrito ubicado en la esquina inferior derecha.
-   Diseño responsive que se adapta a diferentes tamaños de pantalla.

#### Quienes somos (`/about`)

-   Información acerca de la empresa como:
    -   Misión de la empresa.
    -   Visión de la empresa.
    -   Valores de la empresa.

#### Contacto (`/contact`)

-   Información de contacto de la empresa:
    -   Número telefónico para atención al cliente.
    -   Dirección física del establecimiento.
    -   Enlace a la página oficial de Facebook.

#### Carrito (`/cart`)

-   Productos seleccionados en la página `/choose-menu`.
-   Botón para eliminar productos no deseados.
