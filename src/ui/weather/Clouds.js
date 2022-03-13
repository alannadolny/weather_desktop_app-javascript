import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

function Clouds({ weatherData }) {
  return (
    <Box
      sx={{ width: 'calc(50% - 29px)', marginRight: '24px', marginLeft: '5px' }}
    >
      <List
        sx={{
          width: '100%',
          bgcolor: 'rgba(132, 191, 230, 0.7)',
          borderRadius: '20px',
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <CloudIcon fontSize='large' />
          </ListItemAvatar>
          <ListItemText
            primary='Zachmurznie'
            secondary={`${weatherData.clouds.all}%`}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Clouds;
