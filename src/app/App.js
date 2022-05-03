import React from 'react'
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'
import WeatherWeek from './components/WeatherWeek'
import { WEATHER_KEY } from './keys'
import moment from "moment"

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
		hour:'',
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
		moment.locale("es")
		const { ciudad } = e.target.elements
		const valCiudad = ciudad.value
		

		function formatDate(newDate) {
			const formatted = newDate.split(' ')[0]
			
			
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
				temperature: data.main.temp.toString().split(".")[0],
				description: data.weather[0].description,
				humidity: data.main.humidity,
				wind_speed: data.wind.speed,
				city: data.name,
				country: data.sys.country,
				img_bg: data.weather[0].description,
				icon: data.weather[0].icon,
				error: null,
				today_date:moment().format('LLLL').split(" ").splice(1,5).join(" "),
				hour:moment().format('LTS'),
				week: {
					0: [
						{
							date: formatDate(moment().add(1, 'days').calendar()),
							temperature: data2.list[0].main.temp.toString().split(".")[0],
							description: data2.list[0].weather[0].description,
							icon: data2.list[0].weather[0].icon
						},
					],
					1: [
						{
							date: formatDate(moment().add(2, 'days').calendar()),
							temperature: data2.list[8].main.temp.toString().split(".")[0],
							description: data2.list[8].weather[0].description,
							icon: data2.list[8].weather[0].icon
						},
					],
					2: [
						{
							date: formatDate(moment().add(3, 'days').calendar()),
							temperature: data2.list[16].main.temp.toString().split(".")[0],
							description: data2.list[16].weather[0].description,
							icon: data2.list[16].weather[0].icon
						},
					],
					3: [
						{
							date:formatDate(moment().add(4, 'days').calendar()),
							temperature: data2.list[24].main.temp.toString().split(".")[0],
							description: data2.list[24].weather[0].description,
							icon: data2.list[24].weather[0].icon
						},
					],
					4: [
						{
							date: formatDate(moment().add(5, 'days').calendar()),
							temperature: data2.list[32].main.temp.toString().split(".")[0],
							description: data2.list[32].weather[0].description,
							icon: data2.list[32].weather[0].icon
						},
					],
				},
			})
		} else {
			this.setState({ error: 'Porfavor elije una ciudad' })
		}
		console.log(this.state.today_date)
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
