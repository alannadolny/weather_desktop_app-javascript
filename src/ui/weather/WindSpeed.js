import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import AirIcon from '@mui/icons-material/Air';

function WindSpeed({ weatherData }) {
  return (
    <Box
      sx={{ width: 'calc(50% - 29px)', marginRight: '24px', marginLeft: '5px' }}
    >
      <List
        sx={{
          width: '100%',
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
    </Box>
  );
}

export default WindSpeed;
