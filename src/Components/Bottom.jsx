import React from 'react';
import './bottom.css';

function Bottom(props) {
  return (
    <div className='Bottom'>
      <div className="box">
        <div className="abc">
          <div className="inner">
            <p>Wind Speed</p>
          </div>
          <div className="inner">
              <p className='bold'><span style={{color:'rgb(255, 115, 60)'}}>{props.windSpeed}</span> MPH</p>
          </div>
        </div>
        <div className="abc">
        <div className="inner">
            <p>Humidity</p>
          </div>
          <div className="inner">
              <p className='bold'><span style={{color:'rgb(255, 115, 60)'}}>{props.humidity}</span>%</p>
          </div>
        </div>
        <div className="abc">
        <div className="inner">
            <p>Pressure</p>
          </div>
          <div className="inner">
              <p className='bold'><span style={{color:'rgb(255, 115, 60)'}}>{props.pressure}</span>mb</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom;
