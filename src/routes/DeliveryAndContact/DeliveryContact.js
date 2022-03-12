import React from "react";
import { ContactForms, Container, Content } from "./DeliveryContact.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  WebAssetOutlined,
  Mail,
  WhatsApp,
  Facebook,
} from "@mui/icons-material";

function DeliveryContact() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>
          <h1>Zapraszamy do kontaktu z naszą resturacją :</h1>
          <ContactForms>
            <ul>
              <a
                className='link'
                target='blank'
                href='https://restaurant-app-demo.netlify.app'
              >
                <li>poprez naszą stronę internetową</li>
                <WebAssetOutlined className='icon' />
              </a>

              <a
                className='link'
                target='blank'
                href='https://mail.google.com/'
              >
                <li>poprez naszą pocztę elktroniczną</li>
                <Mail className='icon' />
              </a>

              <a
                className='link'
                target='blank'
                href='https://restaurant-app-demo.netlify.app'
              >
                <li>poprez kontakt telefoniczny, SMS lub WhatApp'a</li>
                <WhatsApp className='icon' />
              </a>

              <a
                className='link'
                target='blank'
                href='https://www.facebook.com'
              >
                <li>poprez naszą stronę na FaceBook'u</li>
                <Facebook className='icon' />
              </a>
            </ul>
          </ContactForms>
        </Content>
      </Container>
    </>
  );
}

export default DeliveryContact;
