import Clouds from './Clouds';
import Wind from './Wind';
import MainData from './MainData';
import Pressure from './Pressure';
import { Container, Box } from '@mui/material';
import Humidity from './Humidity';

function Weather({ weatherData }) {
  return (
    <Container>
      <MainData weatherData={weatherData} />
      <Box
        sx={{
          marginLeft: '40px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Pressure weatherData={weatherData} />
        <Clouds weatherData={weatherData} />
        <Humidity weatherData={weatherData} />
        <Wind weatherData={weatherData} />
      </Box>
    </Container>
  );
}

export default Weather;
