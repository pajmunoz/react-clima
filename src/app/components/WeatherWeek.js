import React from "react";

const WeatherWeek = (props) => (
  <>
    {props.description ? (
      <>
        <div className="display-7 pt-3 p-2">Pronóstico diario promedio</div>
        <div className="card card-body">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="fw-light col-4">{props.week[0][0].date}</div>
                <div className="fw-bold col-4">
                  {props.week[0][0].temperature}ºC
                </div>
                <div className="fw-lighter col-4 text-end">
                  {props.week[0][0].description}
                  <div className="icon-small">
                    <img
                      src={`http://openweathermap.org/img/wn/${props.week[0][0].icon}@2x.png`}
                      alt="icon-small"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="fw-light col-4">{props.week[1][0].date}</div>
                <div className="fw-bold col-4">
                  {props.week[1][0].temperature}ºC
                </div>
                <div className="fw-lighter col-4 text-end">
                  {props.week[1][0].description}
                  <div className="icon-small">
                    <img
                      src={`http://openweathermap.org/img/wn/${props.week[1][0].icon}@2x.png`}
                      alt="icon-small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="fw-light col-4">{props.week[2][0].date}</div>
                <div className="fw-bold col-4">
                  {props.week[2][0].temperature}ºC
                </div>
                <div className="fw-lighter col-4 text-end">
                  {props.week[2][0].description}
                  <div className="icon-small">
                    <img
                      src={`http://openweathermap.org/img/wn/${props.week[2][0].icon}@2x.png`}
                      alt="icon-small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="fw-light col-4">{props.week[3][0].date}</div>
                <div className="fw-bold col-4">
                  {props.week[3][0].temperature}ºC
                </div>
                <div className="fw-lighter col-4 text-end">
                  {props.week[3][0].description}
                  <div className="icon-small">
                    <img
                      src={`http://openweathermap.org/img/wn/${props.week[3][0].icon}@2x.png`}
                      alt="icon-small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="fw-light col-4">{props.week[4][0].date}</div>
                <div className="fw-bold col-4">
                  {props.week[4][0].temperature}ºC
                </div>
                <div className="fw-lighter col-4 text-end">
                  {props.week[4][0].description}
                  <div className="icon-small">
                    <img
                      src={`http://openweathermap.org/img/wn/${props.week[4][0].icon}@2x.png`}
                      alt="icon-small"
                    />
                  </div>
                </div>
              </div>
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
