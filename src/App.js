import React, { Fragment, useState } from 'react';
import './style/global.scss'

import SearchIcon from './assets/SearchIcon.js'
import FakeWeather from './components/FakeWeather/FakeWeather'

import Error from './components/Error'
import CurentWeatherIcon from './elements/CurentWeatherIcon'

function App() {

    const API = {
        key: '19225c065a3dc3c5738e29676a4bdf2d',
        base: 'http://api.openweathermap.org/data/2.5/'
    }
    const [city, setCity] = useState('Kiev');
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${API.base}weather?q=${city}&units=metric&appid=${API.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)     
                console.log(result)
            })
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
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    onKeyPress={search}
                    
                />
                <SearchIcon />
            </div>

            {(city === 'Kiev') ? (<FakeWeather date={format_date} />) : ('')}
            
             {(typeof weather.main != 'undefined') ? (
               
                <div></div>
                
        ) : ('')}
        {(weather.cod === "404") ? (
                 <Error />
             ): ('') }
            </div>
        </Fragment>
        
    
    );
}

export default App;