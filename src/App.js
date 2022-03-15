import './App.css';
import Weather from './ui/weather/Weather';
import ShowMap from './ui/map/ShowMap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [geographicalData, setGeographicalData] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geographicalData.latitude}&lon=${geographicalData.longitude}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch();
  }, [geographicalData]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {weatherData && (
            <Route
              path='/weather'
              element={<Weather weatherData={weatherData} />}
            />
          )}
          <Route
            path='/'
            element={<ShowMap setGeographicalData={setGeographicalData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
