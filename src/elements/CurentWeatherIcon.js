import React, {Fragment} from 'react'
import ClearSkyIcon from '../assets/WeatherIcon/ClearSkyIcon'

function CurentWeatherIcon({ city }) {

    React.useEffect(() => {
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${(city =! 'Kiev') ? (city) : ('Kiev')}&units=metric&appid=19225c065a3dc3c5738e29676a4bdf2d`)
        .then(res => res.json())
        .then(result => {
            setWeather(result)     
            console.log(result)
        })
 
   
        }, [])
const [weather, setWeather] = React.useState({})


    
    return (

        (typeof weather.main != 'undefined') ? (
        <Fragment>
            {(weather.weather[0].main === 'Clear') ? (  <ClearSkyIcon /> ) : ('')}
            
            
        </Fragment>
        ) : ('')
    )
}

export default CurentWeatherIcon
