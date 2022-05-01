import React from "react";

const WeatherInfo = (props) => (
  <>
    {props.error && (
      <div className="alert alert-danger">
        <p>{props.error}</p>
      </div>
    )}
    <div className="card card-body">
      <div className="row d-flex justify-content-between">
        <div className="col">
          <div className="display-1">{props.temperature}ºC</div>
          <div className="display-4 fw-bold">{props.city}</div>
          <p className="lead">{props.description}</p>
        </div>
        <div className="col">
            <div className="icon">
                <img className="img-fluid img-thumbnail" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
            </div>
        </div>
      </div>
    </div>
  </>
);

export default WeatherInfo;
