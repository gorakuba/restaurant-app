import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Content, ResHeader } from "./Resevation.styled";
import Table from "../../components/Table/Table";
import { tables } from "../../utilities/tables";
import { motion } from "framer-motion";

const Reservation = () => {
  return (
    <>
      <Header />
      <Container color>
        <Sidebar />

        <Content color>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <ResHeader>Zarezerwuj stolik online już teraz: </ResHeader>
          </motion.div>

          {tables.map((table) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, marginTop: 80 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <Table key={table.id} name={table.name} />
            </motion.div>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Reservation;
