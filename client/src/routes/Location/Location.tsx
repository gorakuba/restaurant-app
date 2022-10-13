import { Container, Map } from './Location.styled';
import { TileLayer, Popup, MapContainer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import L from 'leaflet';
import { locationAnimations } from '../../utils/animations';

const Location = () => {
  L.Icon.Default.imagePath = 'leaflet_images/';

  return (
    <Container>
      <motion.div {...locationAnimations}>
        <Map>
          <MapContainer
            center={[49.854851, 19.33852]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker position={[49.85485, 19.33852]}>
              <Popup>Here you can find us!</Popup>
            </Marker>
          </MapContainer>
        </Map>
      </motion.div>
    </Container>
  );
};

export default Location;
