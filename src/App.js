import './App.css';
import Weather from './ui/weather/Weather';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=54.372158&lon=18.638306&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, []);

  return (
    <div className='App'>
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
