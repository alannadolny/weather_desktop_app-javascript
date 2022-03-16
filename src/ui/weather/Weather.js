import Clouds from './Clouds';
import MainData from './MainData';
import Pressure from './Pressure';
import WindDirection from './WindDirection';
import { Container, Box } from '@mui/material';
import Humidity from './Humidity';
import WindSpeed from './WindSpeed';
import DataGraph from './DataGraph';

function Weather({ weatherData, pastWeatherData, geographicalData }) {
  return (
    <Container sx={{ height: '100%' }}>
      <MainData weatherData={weatherData} geographicalData={geographicalData} />
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
      <Box sx={{ width: '100%' }}>
        <DataGraph pastWeatherData={pastWeatherData.hourly} />
      </Box>
    </Container>
  );
}

export default Weather;
