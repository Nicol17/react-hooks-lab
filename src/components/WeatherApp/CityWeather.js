import React, { useState, useEffect } from 'react';
import axios from 'axios'

    const CityWeather = (props) => {
        const [userCity, setUserCity] = useState('')
        const [temp, setTemp] = useState('')


        useEffect(() => {
            const getWeather = async () => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
                const response = await axios.get(url)
                setTemp(response.data.main.temp)
                setUserCity(response.data.name)
                console.log(response.data)
            }
                getWeather();
        }, [props.cityName])


        return(
            <div><h1>{userCity}</h1>
            <h2>{temp}&#176;</h2>
            </div>
        )

    }



export default CityWeather
