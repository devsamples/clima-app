/* importación basica
habilita la librería React para la creación de componentes
*/
import React from 'react';

/* Componente Tarjetas
funcion arrow declarada
'props' = parametro
'return' : devuelve el componente React tarjetas
donde sea requerido tipo etiqueta <WeatherInfo/>
*/
const WeatherInfo = props => {

  // control: formateo de variable para evitar errores de carga
  var gotWe = []; var el;
  if (props.local_weather){
    gotWe = props.local_weather;
    el = gotWe[0];
  }

  // devuelve el componente React tarjeta
  return (
    <div className="card">
      {
        /* control: bootstrap Alert en caso de error
        2 tipos de errores:
          . formulario vacío
          . la ubicación no tiene estaciones disponibles
        */

        props.error &&
        <div className="alert alert-danger" role="alert">
        {props.error}
        </div>
      }
      <div className="card-body d-flex justify-content-center">
      {
        // control: formateo de variable para evitar errores de carga
        gotWe[0] ?
            <div className="list-group align-self-center">
              <span className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1" style={el.temperature <= 14 ? {color:"blue",fontSize:"16px"} : el.temperature <= 25 ? {color:"orange",fontSize:"20px"} : {color:"red",fontSize:"24px"} } >Temperatura: {el.temperature} ºC</h5>
                </div>
                <p className="mb-1"><span className="text-muted">Visibilidad: {el.clouds} - Humedad: {el.humidity}%</span></p>
                <small>Estación: {el.stationName}</small>
              </span>
            </div>
        :
        <div className="alert alert-primary align-self-center">
          Sistema listo para consultas!
        </div>
      }
      </div>
    </div>
  )

}

// exportación del componente: reutilización
export default WeatherInfo;
