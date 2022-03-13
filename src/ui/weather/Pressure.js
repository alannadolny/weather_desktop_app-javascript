import { Container } from '@mui/material'

function Pressure({ weatherData}) {
    return <Container>
        Ciśnienie: {weatherData.main.pressure} hpa
    </Container>
}

export default Pressure;