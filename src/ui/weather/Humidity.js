import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';

function Humidity({ weatherData }) {
  return (
    <Box
      sx={{ width: 'calc(50% - 29px)', marginLeft: '24px', marginRight: '5px' }}
    >
      <List
        sx={{
          marginTop: '10px',
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
            primary='Wilgotnosc'
            secondary={`${weatherData.main.humidity}%`}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Humidity;
