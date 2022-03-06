const { Container } = require('@mui/material');
const { default: Clouds } = require('./Clouds');

function Weather() {
  return (
    <Container>
      <Clouds />
    </Container>
  );
}

export default Weather;
