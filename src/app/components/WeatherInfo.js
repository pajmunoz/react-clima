import React from "react";

const WeatherInfo = (props) => (
  <>
    {props.error && (
      <div className="alert alert-danger">
        <p>{props.error}</p>
      </div>
    )}
    <div className="card card-body">
      <div className="display-1">{props.temperature}ºC</div>
      <div className="display-4 fw-bold">{props.city}</div>
      <p className="lead">{props.description}</p>
    </div>
  </>
);

export default WeatherInfo;
