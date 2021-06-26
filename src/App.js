import React, { Fragment, useState } from 'react';
import './style/global.scss'

import SearchIcon from './assets/SearchIcon.js'

import Error from './components/Error'
import CloudIcon from './assets/CloudIcon';

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
            
             {(typeof weather.main != 'undefined') ? (
                <Fragment>
                <div className='weather-main'>
                <CloudIcon />
                <div className='weather-wr'>
             <h1>{Math.round(weather.main.temp)}°c</h1>
             <h1>Min temp: {Math.round(weather.main.temp_min)}</h1>
             <h1>Max temp: {Math.round(weather.main.temp_max)}</h1>
             <h1>Feels Like: {Math.round(weather.main.feels_like)}</h1>
             </div>
             </div>
                </Fragment>
        ) : ('')}
        {(weather.cod === "404") ? (
                 <Error />
             ): ('') }
            </div>
        </Fragment>
        
    
    );
}

export default App;