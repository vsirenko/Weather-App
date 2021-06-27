import React, { Fragment, useEffect, useState } from 'react';
import './style/global.scss'

import SearchIcon from './assets/SearchIcon.js'
import FakeWeather from './components/FakeWeather/FakeWeather'

import Error from './components/Error'
import CurentWeatherIcon from './elements/CurentWeatherIcon'
import PlaceIcon from './assets/PlaceIcon'
import loaderIcon from './assets/loader.gif'

function App() {

    const API = {
        key: '19225c065a3dc3c5738e29676a4bdf2d',
        base: 'http://api.openweathermap.org/data/2.5/'
    }
    const [city, setCity] = useState('Kiev');
    const [weather, setWeather] = useState({})
    const [loader, setLoader] = React.useState(true)
    const [time, setTime] = React.useState(new Date().toLocaleTimeString())

React.useEffect(() => {
    setInterval(() => {
        setLoader(false)
    }, 3000);
}, [])


    const search = evt => {
        if (evt.key === 'Enter') {
            
                fetch(`${API.base}weather?q=${city}&units=metric&appid=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)     
                    console.log(result)
                    console.log(city)
                })
                setLoader(!loader)
            
        }
    }

    const format_date = (d) => {
        let months = ['Jan', ' Feb', 'March', 'April', 'May ', 'June', 'July', ' August', 'September', 'October', 'November', ' December'];
        let days = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', ' Friday', 'Saturday '];;
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        
    
        return `${day} ${date} ${month} `
      }
    return (
        <Fragment>
        <div className='main'>

            <div className="inp_wr">
                <input
                    className='input'
                    type='text'
                    placeholder='...'
                    onChange={e => {
                        setCity(e.target.value)
                        setLoader(false)
                    }}
                    onKeyPress={search}  

                />
                <SearchIcon />
            </div>
          
            {(city === 'Kiev') ? (<FakeWeather date={format_date} />) : 
            (
                (loader === true) ? (
            <div className='loader'><img src={loaderIcon}></img></div>
        ) : 
        (

            <div className='fakeWeather'>
           
           
            
            
            {(typeof weather.main != 'undefined') ? (
                <Fragment>
                <div className='title'>
                <PlaceIcon />{weather.name}
                </div>
 
                <div className='date'>
                         <p>{format_date(new Date())}</p>
                         <p>{time}</p>
                 </div>
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
                 </Fragment>
             ) : ('')}
          
           
                
         </div>
        
        )
         
            )}
       
                
       
        {(weather.cod === "404") ? (
                 <Error />
             ): ('') }
            </div>
        </Fragment>
        
    
    );
}

export default App;