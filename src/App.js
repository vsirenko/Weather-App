import React, { Fragment, useState } from 'react';
import './style/global.scss'

import SearchIcon from './assets/SearchIcon.js'
import FakeWeather from './components/FakeWeather/FakeWeather'

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

    const format_date = (d) => {
        let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        let days = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
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
            <FakeWeather date={format_date}/>
             {(typeof weather.main != 'undefined') ? (
               
                <div className='weather-main'>
                   <div className="title"> 
                    <p> City: {weather.name}</p>
                    <p> Country: {weather.sys.country}</p>
                   </div> 
                   <div className="temp-now"> {Math.round(weather.main.temp)}°c </div>
                
                   <div className="another-temp">
                   {/* <div className="date">{format_date(new Date())}</div> */}
                        <div className="wr">
                        <div className="min">Min: {weather.main.temp_min}°c</div>
                        <div className="max">Max: {weather.main.temp_max}°c</div>
                        <div className="feels">Feels:{weather.main.feels_like}°c</div>
                        </div>
                   </div>
                </div>
                
        ) : ('')}
        {(weather.cod === "404") ? (
                 <Error />
             ): ('') }
            </div>
        </Fragment>
        
    
    );
}

export default App;