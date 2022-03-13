import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

function Pressure({ weatherData }) {
  return (
    <Container sx={{ width: '50%' }}>
      <List
        sx={{
          width: '100%',
          bgcolor: 'rgba(132, 191, 230, 0.7)',
          borderRadius: '20px',
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <DeviceThermostatIcon fontSize='large' />
          </ListItemAvatar>
          <ListItemText
            primary='Ciśnienie'
            secondary={`${weatherData.main.pressure} hpa`}
          />
        </ListItem>
      </List>
    </Container>
  );
}

export default Pressure;
