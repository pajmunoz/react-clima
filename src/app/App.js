import React from 'react';
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'
import {WEATHER_KEY} from './keys'

class App extends React.Component {

    state={
        temperature:'',
        description:'',
        humidity:'',
        wind_speed:'',
        city:'',
        country:'',
        erro:null,

    }
 
    getWeather = async e =>{
    e.preventDefault()
    const {ciudad, pais}=e.target.elements
    const valCiudad = ciudad.value
    const valPais = pais.value

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${valCiudad},${valPais}&appid=${WEATHER_KEY}&units=metric&lang=es`
    const response = await fetch(API_URL)
    const data= await response.json()
    console.log(data)
    
    this.setState({
        temperature: data.main.temp,
        description:data.weather[0].description,
        humidity:data.main.humidity,
        wind_speed:data.wind.speed,
        city:data.name,
        country:data.sys.country,
        erro:null,
    })
    
    }

  render() {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col">
                    <WeatherForm getWeather={this.getWeather} />
                    <WeatherInfo {...this.state} />
                </div>
            </div>
        </div>
    );
  }


}

export default App;
