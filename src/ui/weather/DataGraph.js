import { Container } from '@mui/material';
import { Line as LineJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import * as _ from 'lodash';

function DataGraph({ pastWeatherData }) {
  return (
    <Container sx={{ height: '100%' }}>
      <Line
        style={{ height: '100%', maxHeight: '350px' }}
        options={{
          maintainAspectRatio: true,
          plugins: {
            title: {
              display: true,
              text: 'Pogoda archiwalna (12h)',
              color: 'rgb(25, 118, 210)',
              font: {
                size: 20,
              },
            },
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: pastWeatherData.slice(36).reduce((prev, curr) => {
            return [
              ...prev,
              `${new Date(curr.dt * 1000).getHours().toString()}:00`,
            ];
          }, []),
          datasets: [
            {
              data: pastWeatherData.slice(36).reduce((prev, curr) => {
                return [...prev, curr.temp];
              }, []),
              backgroundColor: [...Array(12).keys()].map(
                (el) =>
                  `rgb(${_.random(0, 255)}, ${_.random(0, 255)}, ${_.random(
                    0,
                    255
                  )})`
              ),
              borderColor: 'rgb(25, 118, 210)',
              borderWidth: 5,
            },
          ],
        }}
      />
    </Container>
  );
}

export default DataGraph;
