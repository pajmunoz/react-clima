import React from 'react'
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'
import WeatherWeek from './components/WeatherWeek'
import { WEATHER_KEY } from './keys'

class App extends React.Component {
	state = {
		temperature: '',
		description: '',
		humidity: '',
		wind_speed: '',
		city: '-',
		country: '-',
		img_bg: '',
		icon: '',
		error: null,
		today_date:'',
		week: {
			0: [
				{
					date: '',
					temperature: '-',
					description: '',
					icon: ''
				},
			],
			1: [
				{
					date: '',
					temperature: '',
					description: '',
				},
			],
			2: [
				{
					date: '',
					temperature: '',
					description: '',
				},
			],
			3: [
				{
					date: '',
					temperature: '',
					description: '',
				},
			],
			4: [
				{
					date: '',
					temperature: '',
					description: '',
				},
			],
		},
	}

	getWeather = async (e) => {
		e.preventDefault()
		const { ciudad } = e.target.elements
		const valCiudad = ciudad.value

		function formatDate(newDate) {
			const months = {
				0: 'Enero',
				1: 'Febrero',
				2: 'Marzo',
				3: 'Abril',
				4: 'Mayo',
				5: 'Junio',
				6: 'Julio',
				7: 'Augosto',
				8: 'Septiembre',
				9: 'Octubre',
				10: 'Noviembre',
				11: 'Diciembre'
			}
			const days = ['Sábado', 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
			const d = newDate
			const year = Number(d.split('-')[0])
			const date = Number(d.split('-')[2])
    
			const monthName = months[Number(d.split('-')[1])]
			const dayName = days[Number(d.split('-')[2])]
			const formatted = `${dayName} ${date} de ${monthName} de ${year}`
			return formatted.toString()
		}

		if (valCiudad) {
			const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${valCiudad}&appid=${WEATHER_KEY}&units=metric&lang=es`
			const API_URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${valCiudad}&appid=${WEATHER_KEY}&units=metric&lang=es`
			const response = await fetch(API_URL)
			const response2 = await fetch(API_URL2)
			const data = await response.json()
			const data2 = await response2.json()

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
				today_date:formatDate(data2.list[0].dt_txt.split(' ')[0]),
				week: {
					0: [
						{
							date: formatDate(data2.list[0].dt_txt.split(' ')[0]).split(' ')[0],
							temperature: data2.list[0].main.temp,
							description: data2.list[0].weather[0].description,
							icon: data2.list[0].weather[0].icon
						},
					],
					1: [
						{
							date: formatDate(data2.list[8].dt_txt.split(' ')[0]).split(' ')[0],
							temperature: data2.list[8].main.temp,
							description: data2.list[8].weather[0].description,
							icon: data2.list[8].weather[0].icon
						},
					],
					2: [
						{
							date: formatDate(data2.list[16].dt_txt.split(' ')[0]).split(' ')[0],
							temperature: data2.list[16].main.temp,
							description: data2.list[16].weather[0].description,
							icon: data2.list[16].weather[0].icon
						},
					],
					3: [
						{
							date: formatDate(data2.list[24].dt_txt.split(' ')[0]).split(' ')[0],
							temperature: data2.list[24].main.temp,
							description: data2.list[24].weather[0].description,
							icon: data2.list[24].weather[0].icon
						},
					],
					4: [
						{
							date: formatDate(data2.list[32].dt_txt.split(' ')[0]).split(' ')[0],
							temperature: data2.list[32].main.temp,
							description: data2.list[32].weather[0].description,
							icon: data2.list[32].weather[0].icon
						},
					],
				},
			})
		} else {
			this.setState({ error: 'Porfavor elije una ciudad' })
		}
	}

	render() {
		return (
			<div className={`cont d-flex justify-content-center align-items-center p-4 ${this.state.img_bg}`}>
				<div className='row'>
					<div className='col col-lg-6 mx-auto card card-body main'>
						<div className='row'>
							<div className='col-12 col-lg-12'>
								<div className='display-4 p-2'>Clima</div>
								<WeatherForm getWeather={this.getWeather} />
							</div>
							<div className='col-12 col-lg-12'>
                
								<WeatherInfo {...this.state} />
							</div>
							<div className='col-12 col-md-12 col-lg-12'>
               
								<WeatherWeek {...this.state} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
