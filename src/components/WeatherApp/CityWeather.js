import React, { useState, useEffect } from 'react';
import axios from 'axios'

    const CityWeather = (props) => {
        const [userCity, setUserCity] = useState('')


        useEffect(() => {
            const getWeather = async () => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
                const response = await axios.get(url)
                setUserCity(response.data)
                console.log(response.data)
            }
            getWeather();

        }, [props.cityName])


        return(
            <h1>{userCity.name}</h1>
        )

    }



//     }

// class CityWeather extends Component {


//     state = {}

//     async componentDidMount(){
//         this.getWeather();
//     }

//     componentDidUpdate(oldProps){
//         if(oldProps.cityName !== this.props.cityName){
//             this.getWeather();
//         }
//     }

//     getWeather = async()=>{
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
//         const resp = await axios.get(url);
//         console.log(resp.data);
//     }

//     render(){
//         const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`

//         return(
//             <h1>{this.props.cityName}</h1>
//         )
//     }
// }

export default CityWeather
