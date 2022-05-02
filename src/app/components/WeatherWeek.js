import React from "react";

const WeatherWeek = (props) => (
  <>
    {props.description ? (
      <>
        <div className="display-6 pt-3 p-2">Pronóstico diario</div>
        <div className="card card-body">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="fw-light">{props.week[0][0].date}</div>
              <div className="fw-bold">{props.week[0][0].temperature}ºC</div>
              <div className="fw-lighter">{props.week[0][0].description}</div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="fw-light">{props.week[1][0].date}</div>
              <div className="fw-bold">{props.week[1][0].temperature}ºC</div>
              <div className="fw-lighter">{props.week[1][0].description}</div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="fw-light">{props.week[2][0].date}</div>
              <div className="fw-bold">{props.week[2][0].temperature}ºC</div>
              <div className="fw-lighter">{props.week[2][0].description}</div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="fw-light">{props.week[3][0].date}</div>
              <div className="fw-bold">{props.week[3][0].temperature}ºC</div>
              <div className="fw-lighter">{props.week[3][0].description}</div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="fw-light">{props.week[4][0].date}</div>
              <div className="fw-bold">{props.week[4][0].temperature}ºC</div>
              <div className="fw-lighter">{props.week[4][0].description}</div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div className="card card-body"></div>
    )}
  </>
);

export default WeatherWeek;
