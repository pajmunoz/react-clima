import React from "react";

const WeatherForm = (props) => (
  <div className="card card-body">
    <form onSubmit={props.getWeather}>
      <div className="form-group">
        <select className="form-select" name="ciudad" aria-label="ciudad" placeholder="Ciudad" autoFocus>
        <option value="" >Elige una ciudad</option>
          <option value="quito" >Quito</option>
          <option value="buenos aires">Buenos Aires</option>
          <option value="paris">Paris</option>
          <option value="london">Londres</option>
          <option value="kiev">Kiev</option>
        </select>
        
      </div>
 
      <button className="btn btn-outline-light w-100 mt-2">Buscar</button>
    </form>
  </div>
);

export default WeatherForm;
