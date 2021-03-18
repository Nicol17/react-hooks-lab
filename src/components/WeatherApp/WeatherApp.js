import React, { useState } from 'react';
import CityWeather from './CityWeather';

const WeatherApp = () => {

    const [enteredCity, setEnteredCity] = useState( "" )
    const [enteredCityWeather, setEnteredCityWeather] = useState( "" )

    const changeCity = (event) => {
        setEnteredCity(event.target.value)
    }

    const citySearch = (event) => {
        event.preventDefault();
        setEnteredCityWeather(enteredCity)
    }


    return(
            <div className="container">
        <CityWeather cityName={enteredCityWeather} />
        <div className="row justify-content-center">
            <form onSubmit={citySearch}>
                <input type="text" value={enteredCity} onChange={changeCity} />
                <input type="submit" className="btn btn-primary" value="Search!" />
            </form>
        </div>
    </div>
    )
}

// class WeatherApp extends Component {
//     state = {
//         city: "London",
//         cityNameForWeather: "London",
//     }

//     changeCity = (e)=>{
//         this.setState({city:e.target.value})
//     }

//     citysearch = (e)=>{
//         e.preventDefault();
//         this.setState({cityNameForWeather: this.state.city})
//     }

//     render(){
//         return(
//             <div className="container">
//                 <CityWeather cityName={this.state.cityNameForWeather} />
//                 <div className="row justify-content-center">
//                     <form onSubmit={this.citysearch}>
//                         <input type="text" value={this.state.city} onChange={this.changeCity} />
//                         <input type="submit" className="btn btn-primary" value="Search!" />
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

export default WeatherApp;
