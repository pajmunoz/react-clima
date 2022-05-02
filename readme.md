#   App de clima

- Una app que tiene un selector con 5 opciones de ciudad, la cual nos proporciona datos de [Open weather map](https://openweathermap.org/).

-   Usa Webpack y Babel con plugins como Polyfill, Loader, Plugin-proposal-class-properties, entre otros para manejar async await y otras features de la última version de Javascript.

-   Se ha usado bootstrap para el esqueleto y maquetado, asi como de las clases y estilos que proporciona.

-   Se usa imagenes de fondo que cambian de acuerdo al clima de la ciudad. Por defecto se ha usado una image y 5 estados de clima más. 

###  Para correr la app basta con:

`npm install`

### Después en la carpeta de inicio:

`npm start`

### Para build de proyecto usar:

`npm run build`

### Para revisar el sitio  hosteado en GH-PAGES:

[App Clima](https://pajmunoz.github.io/react-clima/build/)
## importante!
Open weather api tenia deshabilitada la feature de tomar datos diarios, por lo tanto se trabajo con los datos diarios de 5 dias, cada 3 horas, documentados en este enlace (https://openweathermap.org/forecast5) es el único que servia para cumplir los objetivos del challenge.

