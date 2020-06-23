/* importación basica
habilita la librería React para la creación de componentes
*/
import React from 'react';

/* Componente Formulario
funcion arrow declarada
'props' = parametro
'return' = () : devuelve el componente React formulario
donde sea requerido tipo etiqueta <WeatherForm/>
*/
const WeatherForm = props => (
  <div className="card card-body">
    <form onSubmit={props.getWeather}>
      <div className="form-group">
        <input type="text" name="city" placeholder="Ciudad" className="form-control" autoFocus/>
      </div>
      <div className="form-group">
        <input type="text" name="country" placeholder="País" className="form-control" autoFocus/>
      </div>
      <button className="btn btn-info btn-block">Ver</button>
    </form>
  </div>
);

// exportación del componente: reutilización
export default WeatherForm;
