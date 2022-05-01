import React from "react";

const WeatherWeek = (props) => (
  <div className="card card-body">
    <div className="row">
      <div className="col d-flex justify-content-between">
        <div>{props.week[0][0].date}</div>
        <div>{props.week[0][0].temperature}ºC</div>
        <div>{props.week[0][0].description}</div>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col d-flex justify-content-between">
        <div>{props.week[1][0].date}</div>
        <div>{props.week[1][0].temperature}ºC</div>
        <div>{props.week[1][0].description}</div>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col d-flex justify-content-between">
        <div>{props.week[2][0].date}</div>
        <div>{props.week[2][0].temperature}ºC</div>
        <div>{props.week[2][0].description}</div>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col d-flex justify-content-between">
        <div>{props.week[3][0].date}</div>
        <div>{props.week[3][0].temperature}ºC</div>
        <div>{props.week[3][0].description}</div>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col d-flex justify-content-between">
        <div>{props.week[4][0].date}</div>
        <div>{props.week[4][0].temperature}ºC</div>
        <div>{props.week[4][0].description}</div>
      </div>
    </div>
  </div>
);

export default WeatherWeek;
