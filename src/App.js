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
  const [pastWeatherData, setPastWeatherData] = useState(null);

  useEffect(() => {
    if (
      geographicalData.latitude !== null &&
      geographicalData.longitude !== null
    )
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${geographicalData.latitude}&lon=${geographicalData.longitude}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setWeatherData(response.data);
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${geographicalData.latitude}&lon=${geographicalData.longitude}&exclude=current,daily,minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`
            )
            .then((pastData) => {
              setPastWeatherData(pastData.data);
            })
            .catch();
        })
        .catch();
  }, [geographicalData]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {weatherData && pastWeatherData && (
            <Route
              path='/weather'
              element={
                <Weather
                  weatherData={weatherData}
                  pastWeatherData={pastWeatherData}
                  geographicalData={geographicalData}
                />
              }
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
