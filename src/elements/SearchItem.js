import React, {useState} from 'react'
import SearchIcon from '../assets/SearchIcon'
function SearchItem({API}) {

    const [city, setCity] = useState('Kiev');
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${API.base}weather?q=${city}&units=metric&appid=${API.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)     
                // console.log(result)
            })
        }
    }

    return (
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
    )
}

export default SearchItem
