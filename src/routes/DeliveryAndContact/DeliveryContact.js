import React from "react";
import {
  Container,
  Content,
  Map,
  Footer,
  ContactHeader,
  ContactList,
  ContactLink,
  ContactItems,
  ContactIcon,
  ContactInfoText,
  ContactIconWup,
  FooterHeader,
  FooterButton,
} from "./DeliveryContact.styled";
import Header from "../../components/Header/Header";
import {
  WebAssetOutlined,
  Mail,
  WhatsApp,
  Facebook,
} from "@mui/icons-material";
import { TileLayer, MapContainer, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DeliveryContactLogic from "./DeliveryContactLogic";
import { motion } from "framer-motion";

function DeliveryContact() {
  const { position, markerPosition, zoom, send } = DeliveryContactLogic();

  return (
    <>
      <Header />
      <Container color>
        <motion.div>
          <Content color>
            <ContactHeader>
              Zapraszamy do kontaktu z naszą resturacją :
            </ContactHeader>
            <>
              <ContactList>
                <ContactLink
                  color
                  target='blank'
                  href='https://restaurant-app-demo.netlify.app'
                >
                  <ContactItems color>
                    poprzez naszą stronę internetową
                  </ContactItems>
                  <ContactIcon>
                    <WebAssetOutlined />
                  </ContactIcon>
                </ContactLink>

                <ContactLink
                  color
                  target='blank'
                  href='https://mail.google.com/'
                >
                  <ContactItems color>
                    poprzez naszą pocztę elektroniczną
                  </ContactItems>

                  <ContactIcon>
                    <Mail />
                  </ContactIcon>
                </ContactLink>

                <ContactLink
                  color
                  target='blank'
                  href='https://www.whatsapp.com/'
                >
                  <div>
                    <ContactItems color>
                      poprzez kontakt telefoniczny, SMS lub WhatApp'a
                    </ContactItems>
                    <ContactInfoText>
                      (nasz numer telefonu: 123-456-789 oraz nasz adres:
                      Andrychów, ul. Piękna 88)
                    </ContactInfoText>
                  </div>

                  <ContactIconWup>
                    <WhatsApp />
                  </ContactIconWup>
                </ContactLink>

                <ContactLink
                  color
                  target='blank'
                  href='https://www.facebook.com'
                >
                  <ContactItems color>
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

        <motion.div>
          <Map color>
            <MapContainer center={position} zoom={zoom}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />

              <Circle
                center={markerPosition}
                color={{ color: "rgb(65 105 225)" }}
                radius={700}
              >
                <Popup>
                  <h3>Enjoy your meal!</h3>
                  <p>Location: Andrychów</p>
                </Popup>
              </Circle>
            </MapContainer>
          </Map>
        </motion.div>
      </Container>

      <motion.div>
        <Footer color>
          <FooterHeader>
            Może chcesz zostać z nami na dłużej? Złóż swoje CV, a my rozpatrzymy
            twoją propozycję i postaramy się odpowiedzieć tak szybko, jak to
            tylko możliwe 😉
          </FooterHeader>

          <FooterButton color type='submit' onClick={send}>
            Send e-mail to us
          </FooterButton>
        </Footer>
      </motion.div>
    </>
  );
}

export default DeliveryContact;
