# Proyecto de Galería de Imágenes

Este proyecto es una aplicación web de galería de imágenes que permite a los usuarios explorar una colección de fotografías únicas y cautivadoras. La aplicación está construida con React y utiliza `react-router-dom` para la navegación entre diferentes páginas.

## Características

- **Página Principal**: Contiene una introducción y enlaces a otras secciones de la aplicación.
- **Galería**: Muestra una colección de imágenes que se pueden cargar de forma perezosa para mejorar el rendimiento.
- **Contacto**: Permite a los usuarios enviar preguntas o comentarios.
- **Información**: Proporciona información adicional sobre la aplicación.

## Estructura del Proyecto

- `App.js`: Componente principal que configura las rutas de la aplicación.
- `components/Header.js`: Componente de encabezado que se muestra en todas las páginas.
- `components/Footer.js`: Componente de pie de página que se muestra en todas las páginas.
- `components/Main.js`: Componente de la página principal.
- `components/Gallery.js`: Componente de la galería de imágenes.
- `components/Contact.js`: Componente de la página de contacto.
- `components/Info.js`: Componente de la página de información.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd tu-repositorio
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia la aplicación:
    ```sh
    npm start
    ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Dependencias

- React
- React Router DOM
- React Lazy Load Image Component
- Tailwind CSS (para estilos)

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.