import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  Container,
  Content,
  TableSection,
  ResHeader,
} from "./Resevation.styled";
import Table from "../../components/Table/Table";
import { tables } from "./tables";
import { color } from "../../utilities/colors";
import { motion } from "framer-motion";

const Reservation = () => {
  return (
    <>
      <Header />
      <Container color={color}>
        <motion.div>
          <Sidebar />
        </motion.div>

        <motion.div>
          <Content color={color}>
            <ResHeader>Zarezerwuj stolik online już teraz: </ResHeader>
            <TableSection>
              {tables.map((table) => (
                <Table key={table.id} name={table.name} />
              ))}
            </TableSection>
          </Content>
        </motion.div>
      </Container>
    </>
  );
};

export default Reservation;
