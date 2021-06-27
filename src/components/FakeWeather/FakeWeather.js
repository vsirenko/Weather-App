import React, {Fragment} from 'react'
import   './FakeWeather.scss'
import CurentWeatherIcon from '../../elements/CurentWeatherIcon'


import PlaceIcon from '../../assets/PlaceIcon'

function FakeWeather({ date }) {


    React.useEffect(() => {
        
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=19225c065a3dc3c5738e29676a4bdf2d`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)     
                console.log(result)
            })
     
       
    }, [])
    const [weather, setWeather] = React.useState({})

    

    return (
        
        <div className='fakeWeather'>
            
           <div className='title'>
           <PlaceIcon />{weather.name}
           </div>

           <div className='date'>
                        {date(new Date())}
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

    
}

export default FakeWeather
