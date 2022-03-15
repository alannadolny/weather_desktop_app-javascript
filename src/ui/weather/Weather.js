import Clouds from './Clouds';
import MainData from './MainData';
import Pressure from './Pressure';
import WindDirection from './WindDirection';
import { Container, Box, Button } from '@mui/material';
import Humidity from './Humidity';
import WindSpeed from './WindSpeed';
import { useNavigate } from 'react-router-dom';

function Weather({ weatherData }) {
  const navigate = useNavigate();

  const goToMap = () => {
    navigate(-1);
  };

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
      <Button
        variant='contained'
        color='primary'
        onClick={goToMap}
        sx={{ position: 'absolute', bottom: '40px', left: '50px' }}
      >
        Wróć do mapy
      </Button>
    </Container>
  );
}

export default Weather;
