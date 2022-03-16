import { Container } from '@mui/material';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

function Minimap({ geographicalData }) {
  const navigate = useNavigate();

  const goToMap = () => {
    navigate(-1);
  };

  return (
    <Container onClick={goToMap}>
      <MapContainer
        dragging={false}
        className='second-map'
        center={[geographicalData.latitude, geographicalData.longitude]}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        maxZoom={12}
        minZoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          position={[geographicalData.latitude, geographicalData.longitude]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        />
      </MapContainer>
    </Container>
  );
}

export default Minimap;
