/* eslint-disable react/prop-types */
import React from 'react'

const WeatherInfo = (props) => (
	
	<>
	
		{props.description ? (
			<>
				<div className="display-7 pt-3 p-2">Pronóstico de hoy <span className="fw-bold">{props.today_date}</span></div>
				<div className="card card-body">
					<div className="row d-flex justify-content-between align-items-center">
						<div className="col">
							<div className="display-1">{props.temperature}ºC</div>
							<div className="display-4 fw-bold">{props.city}</div>
							<p className="lead">{props.description}</p>
						</div>
						<div className="col">
							<div className="icon">
								<img
									className="img-fluid img-thumbnail"
									src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		) : (
			<div className="card-card-body"></div>
		)}

		{props.error && (
			<div className="alert alert-danger">
				<p>{props.error}</p>
			</div>
		)}
	</>
)

export default WeatherInfo
