import React from 'react';
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'
import {WEATHER_KEY} from './keys'

class App extends React.Component {
 
    getWeather = async e =>{
    e.preventDefault()
    const {ciudad, pais}=e.target.elements
    const valCiudad = ciudad.value
    const valPais = pais.value

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${valCiudad},${valPais}&appid=${WEATHER_KEY}`
    const response = await fetch(API_URL)
    const data= response.json()
    console.log(data)
    
    
    }

  render() {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col">
                    <WeatherForm getWeather={this.getWeather} />
                    <WeatherInfo />
                </div>
            </div>
        </div>
    );
  }


}

export default App;
