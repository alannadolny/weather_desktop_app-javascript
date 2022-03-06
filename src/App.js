import './App.css';
import Weather from './ui/weather/Weather';
import axios from 'axios';

function App() {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&lang=pl&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((response) => {
      console.log(response.data);
    });

  return (
    <div className='App'>
      <Weather />
    </div>
  );
}

export default App;
