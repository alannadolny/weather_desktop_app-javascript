import { Container, Box, Typography } from '@mui/material';

function MainData({ weatherData }) {
  return (
    <Container sx={{ display: 'flex' }}>
      {console.log(weatherData)}
      <img
        style={{ width: '200px' }}
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt='error'
      />
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
