import './App.css';
import axios from 'axios';
import Header from './Header';
import Top from './Components/Top';
import Middle from './Components/Middle';
import Bottom from './Components/Bottom';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=857736f25b8c1622a8f6997beb913e45`;
  const searchLocation = (e) => {

    if (e.key === 'Enter') {
      console.log(location);
      axios.get(url).then((response) => {
        setData(response.data);
      }).catch(error => alert("Location not found"))
    }
  }
  // data.weather?console.log(data.weather[0].icon):console.log("not ready");
  // const tepmInC = 273-(data.main?data.main.temp:null);
  return (
    <div className="App">
      <Header/>
      <Top setLocation={setLocation} searchLocation={searchLocation}/>
      {data.main && data.weather ? <Middle temperature={(data.main.temp-273).toFixed(2)} deg='&#176;' c='c' feelsLike={data.main.feels_like} desc={data.weather.description} icon={data.weather[0].icon}/> : null}
      {data.main && data.wind ? <Bottom windSpeed={data.wind.speed} humidity={data.main.humidity} pressure={data.main.pressure} /> : null}
    </div>
  );
}

export default App;
