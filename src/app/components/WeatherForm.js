import React from 'react'

const WeatherForm = props => (
        <div className="card card-body">
            <form onSubmit={props.getWeather} >
                <div className="form-group">
                    <input type="text" name="ciudad" placeholder="Ciudad" className="form-control" autoFocus/>
                </div>
                <div className="form-group mt-2">
                    <input type="text" name="pais" placeholder="País" className="form-control"/>
                </div>
                <button className="btn btn-success w-100 mt-2">
                    Buscar
                </button>
            </form>
        </div>
    )

export default WeatherForm