import React from 'react';
import './top.css';

function Top(props) {
  return (
    <div className='Top'>
      <div className="search-box">
        <input type="text" id='search'
          onChange={e => {props.setLocation(e.target.value) }}
          onKeyDown={(e) => props.searchLocation(e)}
          placeholder='Enter Location' autoComplete='off' />
      </div>
    </div>
  )
}

export default Top;
