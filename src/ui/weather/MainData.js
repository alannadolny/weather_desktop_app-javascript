import { Container, Box, Typography } from '@mui/material';
import Radium, { StyleRoot } from 'radium';
import { bounceInLeft } from 'react-animations';

function MainData({ weatherData }) {
  return (
    <Container sx={{ display: 'flex' }}>
      <StyleRoot>
        <img
          style={{
            width: '200px',
            animation: 'x 2s',
            animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft'),
          }}
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt='error'
        />
      </StyleRoot>

      <Box>
        <Box sx={{ marginTop: '50px' }}>
          <Typography variant='h3' color='primary'>
            {weatherData.name} {weatherData.main.temp}°C
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6' color='primary'>
            {weatherData.weather[0].description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default MainData;
