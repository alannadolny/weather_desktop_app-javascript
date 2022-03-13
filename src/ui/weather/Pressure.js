import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

function Pressure({ weatherData }) {
  return (
    <Container>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DeviceThermostatIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
      </List>
      <Typography color='primary'>
        <strong>Ciśnienie: </strong>
        {weatherData.main.pressure} hpa
      </Typography>
    </Container>
  );
}

export default Pressure;
