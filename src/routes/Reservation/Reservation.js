import React from "react";

//components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";

//styled components
import { Container, Content, ResHeader } from "./Resevation.styled";

//tables
import { tables } from "../../resources/tables";

//framer motion
import { motion } from "framer-motion";

const Reservation = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />

        <Content>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <ResHeader>Zarezerwuj stolik online już teraz: </ResHeader>
          </motion.div>

          {tables.map((table) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, marginTop: 80 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <Table name={table.name} />
            </motion.div>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Reservation;
