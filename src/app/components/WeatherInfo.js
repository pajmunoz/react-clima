import React from 'react'

const WeatherInfo = props =>  (
        <div className="card card-body">
            <h1>{props.temperature}º</h1>
            {props.city},{props.country}
            <p>{props.description}</p>
        </div>
    )

export default WeatherInfo