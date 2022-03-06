const { Container } = require('@mui/material');

function Clouds({ weatherData }) {
  return <Container>Zachmurzenie: {weatherData.clouds.all}%</Container>;
}

export default Clouds;
