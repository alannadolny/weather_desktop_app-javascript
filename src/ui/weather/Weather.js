import Clouds from './Clouds';
import Wind from './Wind';
import MainData from './MainData';
import Pressure from './Pressure';
import { Container, Box } from '@mui/material';

function Weather({ weatherData }) {
  return (
    <Container>
      <MainData weatherData={weatherData} />
      <Box sx={{ marginLeft: '40px' }}>
        <Pressure weatherData={weatherData} />
        <Clouds weatherData={weatherData} />
        <Wind weatherData={weatherData} />
      </Box>
    </Container>
  );
}

export default Weather;
