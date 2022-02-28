import React from "react";
import { Container, Content } from "./DeliveryContact.styled";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function DeliveryContact() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>contact</Content>
      </Container>
    </>
  );
}

export default DeliveryContact;
