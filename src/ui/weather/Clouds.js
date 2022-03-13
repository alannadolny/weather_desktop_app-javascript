import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

function Clouds({ weatherData }) {
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
            <CloudIcon fontSize='large' />
          </ListItemAvatar>
          <ListItemText
            primary='Zachmurznie'
            secondary={`${weatherData.clouds.all}%`}
          />
        </ListItem>
      </List>
    </Container>
  );
}

export default Clouds;
