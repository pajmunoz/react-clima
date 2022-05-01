import React from "react";

const WeatherInfo = (props) => (
  <>
    {props.error && (
      <div className="alert alert-danger">
        <p>{props.error}</p>
      </div>
    )}
    <div className="card card-body">
      <h1>{props.temperature}ºC</h1>
      {props.city},{props.country}
      <p>{props.description}</p>
    </div>
  </>
);

export default WeatherInfo;
