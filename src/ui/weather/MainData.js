import { Container, Box } from '@mui/material'

function MainData({ weatherData }) {
    return <Container sx={{display: 'flex'}}>
        <img style={{width: '200px'}} src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='error' />
      <Box>{weatherData.name}</Box>
      <Box>{weatherData.weather[0].description}</Box>
    </Container>   
}

export default MainData