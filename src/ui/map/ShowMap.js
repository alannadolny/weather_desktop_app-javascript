import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import Control from 'react-leaflet-custom-control';
import { Button } from '@mui/material';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShowMap({ setGeographicalData }) {
  const [position, setPosition] = useState([54.372158, 18.638306]);
  const navigate = useNavigate();

  const MapEvents = () => {
    useMapEvents({
      click(event) {
        setPosition([event.latlng.lat, event.latlng.lng]);
      },
    });
    return false;
  };

  const goToWeather = () => {
    navigate('/weather');
    setGeographicalData({
      latitude: position[0],
      longitude: position[1],
    });
  };

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        />
        <MapEvents />
        <Control position='bottomleft'>
          <Button color='primary' variant='contained' onClick={goToWeather}>
            Wybierz to miejsce
          </Button>
        </Control>
      </MapContainer>
    </div>
  );
}
export default ShowMap;
