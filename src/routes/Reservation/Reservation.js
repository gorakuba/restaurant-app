import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Content, TableSection } from "./Resevation.styled";
import Table from "../../components/Table/Table";
import { tables } from "./tables";

const Reservation = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>
          <h1>Zarezerwuj stolik online już teraz: </h1>
          <TableSection>
            {tables.map((table) => (
              <Table key={table.id} name={table.name} />
            ))}
          </TableSection>
        </Content>
      </Container>
    </>
  );
};

export default Reservation;
