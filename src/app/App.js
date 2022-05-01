import React from 'react';
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'

class App extends React.Component {
 

  render() {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-6">
                    <WeatherInfo />
                </div>
                <div className="col-6">
                    <WeatherForm />
                </div>
            </div>
        </div>
    );
  }


}

export default App;
