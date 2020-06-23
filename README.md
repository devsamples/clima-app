# Clima API Documentación

## Introducción
Objetivos del desarrollo para cumplir con los requisitos:
  * Simplicidad
  * Performance
  * Sostenibilidad

Se ha desarrollado una web app basada en React (JavaScript). De este modo, a través de un lenguaje ágil y flexible como JS, se cumple con los requisitos de implementación, y al mismo tiempo, se desarrolla un sistema que otro programador podría retomar y extender sin conocimientos muy rápidamente.

Tras la compilación del proyecto se obtendra un website estático, en desarrollo sigue la estructura básica por defecto heredada del CLI 'create-react-app'.

**El front-end inicial** de la web-app (en adelante 'clima-app') **es un formulario muy simple** de dos inputs (ciudad y país) y un botón para enviar.

**El back-end** interactua con la API en dos pasos, la primera consulta **obtiene la ubicación de la estación climática**. La segunda consulta obtiene **los datos del clima y la latitud/longitud** de dicha estación. Estos datos se entregan a __componentes de React__ y se activa un **front-end de respuesta** que visualiza los datos por pantalla, **tarjetas bootstrap** de texto puro y coordenadas de latitud/longitud que se cuadran en **un mapa señaladas por un marcador**.

El ciclo de consulta-respuesta se realiza a través de **componentes de React** reutilizables basados en JSX, lo que permite integrar HTML puro (sin la necesidad de incrustarlas en strings) dentro estructuras de JavaScript.

## El Desarrollo
Para este proyecto se crearon tres archivos que representan cada uno de los componentes. Estos componentes se estructuran __casi exactamente__ al equivalente de exportar un módulo de JavaScript Vainilla:
  1. Formulario de consulta => WeatherForm.js
  2. Tarjeta de Respuesta => WeatherInfo.js
  3. Mapa con marcador => WeatherMap.js

Estos componentes desarrollados por separado, a través de la exportación, se integran el "shell":
  * App.js

Se utilizó **Bootstrap** para dar estilo y __normalizar__ las etiquetas HTML.

**No se manipulan eventos más allá del ciclo request-response de la API**

## Documentación integrada
Cada integración exhibe comentarios con detalles oportunos que complementan esta documentación.

## Instalación

  * Instalación:  `npm install`
  * Modo Desarrollo: `npm start`
  * Modo Producción: `npm run build`
  * Crea Github Page: `npm run deploy` (require API HTTPS)

Al correr el modo producción se creará (o actualizará) la carpeta './build' con todos los archivos para una web-app estática.

## Performance
React crea aplicaciones web optimizadas. Al montar un sistema sobre React partimos elevadas sin codigo añadido, y además, capaz de ofrecer funcionalidades offline:
    * Carga 95%
    * Accesibilidad 70%
    * Legibilidad 86%
    * SEO 100%

## FAQ
  * React - JSX - PWA
    - React [https://es.reactjs.org/](https://es.reactjs.org/)
    - JSX [https://es.reactjs.org/docs/introducing-jsx.html](https://es.reactjs.org/docs/introducing-jsx.html)
    - PWA [https://web.dev/what-are-pwas/](https://web.dev/what-are-pwas/)
