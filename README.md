Gestión de Tareas con React e IndexedDB

Descripción:

Este proyecto es una aplicación de gestión de tareas desarrollada con React para el frontend y IndexedDB para el almacenamiento de datos en el navegador. La aplicación permite a los usuarios realizar un CRUD, almacenando la información de manera persistente en el navegador.

Características Principales:

React Frontend: Interfaz de usuario interactiva y dinámica construida con React.
IndexedDB: Almacenamiento de datos local en el navegador, permitiendo persistencia de datos.
Creación de Tareas: Formulario para agregar nuevas tareas con nombre y descripción.
Listado de Tareas: Muestra todas las tareas almacenadas en IndexedDB.
Componentes Reutilizables: Utiliza componentes de React para modularizar la aplicación.
Notificaciones: Implementa una notificación visual al agregar una tarea.
Estructura del Proyecto:

├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Nav.js
│   │   ├── Tasklist.js
│   │   ├── TaskItem.js (aunque no se usa en este código)
│   │   ├── TaskForm.js
│   │   └── Footer.js
│   ├── img/
│   │   └── img.jpg
│   ├── index.js
│   ├── App.js
│   └── index.css
├── package.json
└── README.md
Tecnologías Utilizadas:

React
IndexedDB
CSS
