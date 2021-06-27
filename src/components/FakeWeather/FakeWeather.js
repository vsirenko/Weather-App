import React, {Fragment} from 'react'
import   './FakeWeather.scss'
import CurentWeatherIcon from '../../elements/CurentWeatherIcon'
import loaderIcon from '../../assets/loader.gif'

import PlaceIcon from '../../assets/PlaceIcon'

function FakeWeather({ date }) {


    React.useEffect(() => {
        
           setInterval(() => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=19225c065a3dc3c5738e29676a4bdf2d`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)     
                // console.log(result)
            })
            setTime(new Date().toLocaleTimeString())
            
           }, 1000);
            
       
    }, [FakeWeather])
    const [weather, setWeather] = React.useState({})
    const [time, setTime] = React.useState(new Date().toLocaleTimeString())
    const [loader, setLoader] = React.useState(true)
    

    React.useEffect(() => {
        setInterval(() => {
            setLoader(false);
        }, 2000);
    }, [])
 
    return (
        (loader === true) ? (
            <div className='loader'><img src={loaderIcon}></img></div>
        ) : 
        (

            <div className='fakeWeather'>
            <div><img src={loader}></img></div>
            <div className='title'>
            <PlaceIcon />{weather.name}
            </div>
 
            <div className='date'>
                         <p>{date(new Date())}</p>
                         <p>{time}</p>
                 </div>
            
            {(typeof weather.main != 'undefined') ? (
                 <div className='wr' >
                 <div className='left'>
 
                 
 
                 <CurentWeatherIcon />
                     <div className='temp'> 
                         {Math.round(weather.main.temp)}°c
                     </div>
                 </div>
                 <div className='right'>
 
                     <div className='sky'> 
                         {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1) }
                     </div>
 
                     <div className='all-temp'>
                         {Math.round(weather.main.temp_max)}°c / {Math.round(weather.main.temp_min)}°c
                     </div>
                     
                     <div className='feel-like'>
                         <p>Feels like: </p> {Math.round(weather.main.feels_like)}°c
                     </div>
                 </div>
                 </div>
             ) : ('')}
          
           
                
         </div>
        
        )
       
    )

   
}

export default FakeWeather

