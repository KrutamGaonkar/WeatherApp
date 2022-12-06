import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <img className='icons' src={`http://openweathermap.org/img/wn/02d@2x.png`} alt="wthr img" />
            </div>
            <div className="name">
                <h1 className='weatherApp'>Weather<span style={{color:'rgb(255, 115, 60)'}}>App</span></h1>
            </div>
        </div>
    )
}

export default Header
