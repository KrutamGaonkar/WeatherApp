import React from 'react'
import './middle.css';

function Middle(props) {
  return (
    <div className='Middle'>
      <div className="container">
        <h1 className='temp'>{props.temperature}<span style={{color:'rgb(255, 115, 60)'}}>{props.deg}</span>{props.c}</h1>
        <img className='icons' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="wthr img" />
      </div>
      <h3 className='feels_like'>It feels like {(props.feelsLike - 273).toFixed(2)}<span style={{color:'rgb(255, 115, 60)'}}>{props.deg}</span>{props.c}</h3>
    </div>
  )
}

export default Middle;


