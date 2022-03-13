import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import AirIcon from '@mui/icons-material/Air';

function Wind({ weatherData }) {
  const windDegrees = (deg) => {
    switch (true) {
      case (deg >= 0 && deg <= 11) || (deg >= 349 && deg <= 360):
        return 'północny';
      case deg >= 12 && deg <= 33:
        return 'północno-północno-wschodni';
      case deg >= 34 && deg <= 56:
        return 'północno-wschodni';
      case deg >= 57 && deg <= 78:
        return 'wschodnio-północno-wschodni';
      case deg >= 79 && deg <= 101:
        return 'wschodni';
      case deg >= 102 && deg <= 123:
        return 'wschodnio-południowo-wschodni';
      case deg >= 124 && deg <= 146:
        return 'południowo wschodni';
      case deg >= 147 && deg <= 168:
        return 'południowo-południowo-wschodni';
      case deg >= 169 && deg <= 191:
        return 'południowy';
      case deg >= 192 && deg <= 213:
        return 'południowo-południowo-zachodni';
      case deg >= 214 && deg <= 236:
        return 'południowo-zachodni';
      case deg >= 237 && deg <= 258:
        return 'zachodnio-południowo-zachodni';
      case deg >= 259 && deg <= 281:
        return 'zachodni';
      case deg >= 282 && deg <= 303:
        return 'zachodnio-północno-zachodni';
      case deg >= 304 && deg <= 326:
        return 'północno-zachodni';
      case deg >= 327 && deg <= 348:
        return 'północno-północno-zachodni';
      default:
        return 'brak wiatru';
    }
  };

  return (
    <Container>
      <List
        sx={{
          width: '50%',
          bgcolor: 'rgba(132, 191, 230, 0.7)',
          borderRadius: '20px',
          marginTop: '10px',
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <AirIcon fontSize='large' />
          </ListItemAvatar>
          <ListItemText
            primary='Prędkość wiatru'
            secondary={`${weatherData.wind.speed} m/s`}
          />
        </ListItem>
      </List>
      Kierunek wiatru: {windDegrees(weatherData.wind.deg)}
    </Container>
  );
}

export default Wind;
