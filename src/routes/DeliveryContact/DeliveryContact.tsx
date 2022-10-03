import {
  Container,
  Content,
  Map,
  ContactHeader,
  ContactList,
  ContactLink,
  ContactItems,
  ContactIcon,
  ContactInfoText,
  ContactIconWupMail,
} from './DeliveryContact.styled';

import WebAssetOutlined from '@mui/icons-material/WebAssetOutlined';
import Mail from '@mui/icons-material/Mail';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Facebook from '@mui/icons-material/Facebook';

import { TileLayer, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { motion } from 'framer-motion';

const DeliveryContact = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Content>
            <ContactHeader>
              Zapraszamy do kontaktu z naszą resturacją:
            </ContactHeader>
            <>
              <ContactList>
                <ContactLink
                  target='blank'
                  href='https://restaurant-app-demo.netlify.app'
                >
                  <ContactItems>poprzez naszą stronę internetową</ContactItems>
                  <ContactIcon>
                    <WebAssetOutlined />
                  </ContactIcon>
                </ContactLink>

                <ContactLink>
                  <div>
                    <ContactItems>
                      poprzez naszą pocztę elektroniczną
                    </ContactItems>
                    <ContactInfoText>
                      (nasz adres e-mail: bestreasturant@gmail.com)
                    </ContactInfoText>
                  </div>

                  <ContactIconWupMail>
                    <Mail />
                  </ContactIconWupMail>
                </ContactLink>

                <ContactLink target='blank' href='https://www.whatsapp.com/'>
                  <div>
                    <ContactItems>
                      poprzez kontakt telefoniczny, SMS lub WhatApp'a
                    </ContactItems>
                    <ContactInfoText>
                      (nasz numer telefonu: 123-456-789 oraz nasz adres:
                      Andrychów, ul. Piękna 88)
                    </ContactInfoText>
                  </div>

                  <ContactIconWupMail>
                    <WhatsApp />
                  </ContactIconWupMail>
                </ContactLink>

                <ContactLink target='blank' href='https://www.facebook.com'>
                  <ContactItems>
                    poprzez naszą stronę na FaceBook'u
                  </ContactItems>

                  <ContactIcon>
                    <Facebook />
                  </ContactIcon>
                </ContactLink>
              </ContactList>
            </>
          </Content>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Map>
            {/* <MapContainer center={[49.854851, 19.33852]} zoom={12}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Circle center={[49.85485, 19.33852]} radius={700}>
                <Popup>
                  <h3>Enjoy your meal!</h3>
                  <p>Location: Andrychów</p>
                </Popup>
              </Circle>
            </MapContainer> */}
          </Map>
        </motion.div>
      </Container>
    </>
  );
};

export default DeliveryContact;
