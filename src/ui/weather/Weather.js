import Clouds from './Clouds';
import Wind from './Wind';
const { Container } = require('@mui/material');

function Weather({ weatherData }) {
  return (
    <Container>
      <Clouds weatherData={weatherData} />
      <Wind weatherData={weatherData} />
    </Container>
  );
}

export default Weather;
