import React from "react";
import {
  ContactForms,
  Container,
  Content,
  Map,
  Footer,
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
import { color } from "../../utilities/colors";
import { colors } from "../../utilities/colors";

function DeliveryContact() {
  const { position, markerPosition, zoom, send } = DeliveryContactLogic();

  return (
    <>
      <Header />
      <Container color={color}>
        <Content color={color}>
          <h1>Zapraszamy do kontaktu z naszą resturacją :</h1>
          <ContactForms color={color}>
            <ul>
              <a
                className='link'
                target='blank'
                href='https://restaurant-app-demo.netlify.app'
              >
                <li>poprzez naszą stronę internetową</li>
                <WebAssetOutlined className='icon' />
              </a>

              <a
                className='link'
                target='blank'
                href='https://mail.google.com/'
              >
                <li>poprzez naszą pocztę elektroniczną</li>
                <Mail className='icon' />
              </a>

              <a
                className='link'
                target='blank'
                href='https://www.whatsapp.com/'
              >
                <div className='contact'>
                  <li>poprzez kontakt telefoniczny, SMS lub WhatApp'a</li>
                  <p>
                    (nasz numer telefonu: 123-456-789 oraz nasz adres:
                    Andrychów, ul. Piękna 88)
                  </p>
                </div>

                <WhatsApp className='iconWup' />
              </a>

              <a
                className='link'
                target='blank'
                href='https://www.facebook.com'
              >
                <li>poprzez naszą stronę na FaceBook'u</li>
                <Facebook className='icon' />
              </a>
            </ul>
          </ContactForms>
        </Content>

        <Map color={color}>
          <MapContainer center={position} zoom={zoom}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Circle
              center={markerPosition}
              color={colors.twelfthColorType}
              radius={700}
            >
              <Popup>
                <h3>Enjoy your meal!</h3>
                <p>Location: Andrychów</p>
              </Popup>
            </Circle>
          </MapContainer>
        </Map>
      </Container>

      <Footer color={color}>
        <h3>
          Może chcesz zostać z nami na dłużej? Złóż swoje CV, a my rozpatrzymy
          twoją propozycję i postaramy się odpowiedzieć tak szybko, jak to tylko
          możliwe 😉
        </h3>

        <button type='submit' onClick={send}>
          Send e-mail to us
        </button>
      </Footer>
    </>
  );
}

export default DeliveryContact;
