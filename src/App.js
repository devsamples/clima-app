/* importación basica
habilita la librería React para la creación de componentes
*/
import React, { Component } from 'react';

// importación de los componentes
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import WeatherMap from './components/WeatherMap';

import { WEATHER_KEY } from './api-weather-keys';

// hoja de estilo del mapa
import 'leaflet/dist/leaflet.css';

/* Componente Home
el metodo render imprime por pantalla el componente
*/
class App extends Component {

  // propiedad por defecto para transportar datos dentro de la clase
  state = "";

  // funcion request-response contra API
  getWeather = async e => {
    // evitar recarga por default de página por envío de formulario
    e.preventDefault();

    // inputs
    const { city, country } = e.target.elements;

    // fields
    const cityValue = city.value;
    console.log("App input Ciudad:" , cityValue);
    const countryValue = country.value;
    console.log("App input País:" , countryValue);

    /* control:
    proceder solo si cityValue && countryValue tienen valor true
    sino crear la propiedad error (string mostrado en pantalla)
    */
    if ( cityValue && countryValue ){

      // API URL : obtener localización de la estación del clima
      const API_URL = `http://api.geonames.org/searchJSON?q=${cityValue}&country=${countryValue}&maxRows=20&startRow=0&lang=en&isNameRequired=true&style=FULL${WEATHER_KEY}`;
      // La API_KEY es visible solo por requisitos ya que es desaconsejado para producción y debería ser privada
      console.log("App call (for station position or bbox) url",API_URL);
      // Llamada asíncrona que devuelve una promesa
      const response = await fetch(API_URL);
      const data = await response.json();
      // respuesta
      const item = data.geonames[0];
      console.log("API (station) response item",item);

      /* control:
      proceder solo si item tiene valor true
      sino crear la propiedad error (string mostrado en pantalla)
      */
      if ( item ){

        // Segunda llamada : obtener datos del clima
        const API_WEATHER_URL = `http://api.geonames.org/weatherJSON?north=${item.bbox.north}&south=${item.bbox.south}&east=${item.bbox.east}&west=${item.bbox.west}${WEATHER_KEY}`;
        // La API_KEY es visible solo por requisitos ya que es desaconsejado para producción y debería ser privada
        console.log("App call (for weather data from station) url",API_WEATHER_URL);
        // Llamada asíncrona que devuelve una promesa
        const weather_response = await fetch(API_WEATHER_URL);
        const data_weather = await weather_response.json();
        // respuesta
        const local_weather = data_weather.weatherObservations;
        console.log("API (weather) response local_weather",local_weather);

        /* control:
        proceder solo si local_weather tiene valores
        ya que algunas ubicaciones no traen datos de estaciones del clima (ej: Asturias, Barcelona, etc.)
        sino crear la propiedad error (string mostrado en pantalla)
        */
        if ( local_weather.length > 0 ){
          this.setState({
            "error": null,
            local_weather
          });
        }
        else {
          this.setState({
            error: 'No se han encontrado datos de la ubicación seleccionada, selecciona otra ubicación e intentelo nuevamente.'
          });
        }

      }


    }
    else {
      this.setState({
        error: 'Por favor, ingresa una ciudad y un país que además sean correspondientes entre sí.'
      });
    }

  }

  /* método: impresión por pantalla componente React: HOME
  integra tres componentes: formulario - tarjeta - mapa
  formulario: se le pasa la función para que tome los valores
  tarjeta - mapa: se les pasa la variable que guarda los datos del clima
  */
  render(){
    return (
      <div className="row m-0">
        <div className="container py-4">
          <div className="d-flex justify-content-center">
            <WeatherForm getWeather={this.getWeather}/>
            <WeatherInfo {...this.state}/>
          </div>
        </div>
        <WeatherMap {...this.state}/>
      </div>
    )
  }
}

// exportación del componente: reutilización
export default App;
