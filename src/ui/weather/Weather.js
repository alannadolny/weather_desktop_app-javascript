import Clouds from './Clouds';
import MainData from './MainData';
import Pressure from './Pressure';
import WindDirection from './WindDirection';
import { Container, Box } from '@mui/material';
import Humidity from './Humidity';
import WindSpeed from './WindSpeed';

function Weather({ weatherData }) {
  return (
    <Container>
      <MainData weatherData={weatherData} />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Pressure weatherData={weatherData} />
        <Clouds weatherData={weatherData} />
        <Humidity weatherData={weatherData} />
        <WindSpeed weatherData={weatherData} />
        <WindDirection weatherData={weatherData} />
      </Box>
    </Container>
  );
}

export default Weather;
