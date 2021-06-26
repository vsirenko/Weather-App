import React, { Fragment, useState } from 'react';

function App() {

    const API = {
        key: '19225c065a3dc3c5738e29676a4bdf2d',
        base: 'http://api.openweathermap.org/data/2.5/'
    }
    const [city, setCity] = useState('');
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

        </Fragment>
    );
}

export default App;