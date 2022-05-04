import React from "react";

//components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";

//styled components
import {
  Container,
  Content,
  ResHeader,
  NotLogged,
  LoginButton,
} from "./Resevation.styled";

//tables
import { tables } from "../../resources/tables";

//framer motion
import { motion } from "framer-motion";

//header logic
import HeaderLogic from "../../components/Header/HeaderLogic";

//react router
import { Link } from "react-router-dom";

const Reservation = () => {
  const { check } = HeaderLogic();

  return (
    <>
      <Header />

      {check === false ? (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to='/login'>
            <NotLogged>You are not logged in!</NotLogged>
            <LoginButton>Login</LoginButton>
          </Link>
        </motion.div>
      ) : (
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
      )}
    </>
  );
};

export default Reservation;
