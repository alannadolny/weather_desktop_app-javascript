import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';

function Humidity({ weatherData }) {
  return (
    <Container>
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
              <OpacityIcon fontSize='large' />
            </ListItemAvatar>
            <ListItemText
              primary='Zachmurznie'
              secondary={`${weatherData.clouds.all}%`}
            />
          </ListItem>
        </List>
      </Container>
      Wilgotność: {weatherData.main.humidity}
    </Container>
  );
}

export default Humidity;
