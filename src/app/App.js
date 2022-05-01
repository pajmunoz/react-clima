import React from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import WeatherWeek from "./components/WeatherWeek";
import { WEATHER_KEY } from "./keys";

class App extends React.Component {
  state = {
    temperature: "-",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "-",
    country: "-",
    img_bg: "",
    icon:"01d",
    error: null,
    week: {
      0: [
        {
          date: "",
          temperature: "-",
          description: "",
        },
      ],
      1: [
        {
          date: "",
          temperature: "-",
          description: "",
        },
      ],
      2: [
        {
          date: "",
          temperature: "-",
          description: "",
        },
      ],
      3: [
        {
          date: "",
          temperature: "-",
          description: "",
        },
      ],
      4: [
        {
          date: "",
          temperature: "-",
          description: "",
        },
      ],
    },
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { ciudad } = e.target.elements;
    const valCiudad = ciudad.value;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${valCiudad}&appid=${WEATHER_KEY}&units=metric&lang=es`;
    const API_URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${valCiudad}&appid=${WEATHER_KEY}&units=metric&lang=es`;
    const response = await fetch(API_URL);
    const response2 = await fetch(API_URL2);
    const data = await response.json();
    const data2 = await response2.json();
    console.log(data);

    console.log(
      data2.list[0].dt_txt,
      data2.list[8].dt_txt,
      data2.list[16].dt_txt,
      data2.list[24].dt_txt,
      data2.list[32].dt_txt
    );

    this.setState({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      city: data.name,
      country: data.sys.country,
      img_bg: data.weather[0].description,
      icon: data.weather[0].icon,
      error: null,
      week: {
        0: [
          {
            date: data2.list[0].dt_txt.split(" ")[0],
            temperature: data2.list[0].main.temp,
            description: data2.list[0].weather[0].description,
          },
        ],
        1: [
          {
            date: data2.list[8].dt_txt.split(" ")[0],
            temperature: data2.list[8].main.temp,
            description: data2.list[8].weather[0].description,
          },
        ],
        2: [
          {
            date: data2.list[16].dt_txt.split(" ")[0],
            temperature: data2.list[16].main.temp,
            description: data2.list[16].weather[0].description,
          },
        ],
        3: [
          {
            date: data2.list[24].dt_txt.split(" ")[0],
            temperature: data2.list[24].main.temp,
            description: data2.list[24].weather[0].description,
          },
        ],
        4: [
          {
            date: data2.list[32].dt_txt.split(" ")[0],
            temperature: data2.list[32].main.temp,
            description: data2.list[32].weather[0].description,
          },
        ],
      },
    });
  };

  render() {
 
    return (
      <div className={`cont p-4 ${this.state.img_bg}`}>
        <div className="row">
          <div className="col card card-body main">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="display-4 p-2">Clima</div>
                <WeatherForm getWeather={this.getWeather} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="display-6 pt-3 p-2">Pronóstico de hoy</div>
                <WeatherInfo {...this.state} />
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="display-6 pt-3 p-2">Pronóstico diario</div>
                <WeatherWeek {...this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
