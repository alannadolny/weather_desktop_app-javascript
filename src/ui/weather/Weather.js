import Clouds from './Clouds';
import Wind from './Wind';
import MainData from './MainData'
import Pressure from './Pressure';
const { Container } = require('@mui/material');

function Weather({ weatherData }) {
  return (
    <Container>
      <MainData weatherData={weatherData}/>
      <Pressure weatherData={weatherData}/>
      <Clouds weatherData={weatherData} />
      <Wind weatherData={weatherData} />
    </Container>
  );
}

export default Weather;
