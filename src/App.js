import React, { Fragment, useState } from 'react';

function App() {

    const API = {
        key: '19225c065a3dc3c5738e29676a4bdf2d',
        base: 'http://api.openweathermap.org/data/2.5/'
    }
    const [city, setCity] = useState('Kyiv');
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

        <input
            type='text'
            placeholder='Поиск...'
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
             {(typeof weather.main != 'undefined') ? (
                <Fragment>
             <h1>{Math.round(weather.main.temp)}°c</h1>
             <h1>Min temp: {Math.round(weather.main.temp_min)}</h1>
             <h1>Max temp: {Math.round(weather.main.temp_max)}</h1>
             <h1>Feels Like: {Math.round(weather.main.feels_like)}</h1>
                </Fragment>
        ) : ('')}
        {(weather.cod === "404") ? (
                 <h1>Такого Города нету</h1>
             ): ('') }
      
        </Fragment>
    );
}

export default App;