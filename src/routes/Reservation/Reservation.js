import React, { useEffect, useState } from 'react';

import Table from '../../components/Table/Table';
import { Container, Content, ResHeader } from './Resevation.styled';

import { motion } from 'framer-motion';
import axios from 'axios';

const Reservation = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/tables')
      .then((response) => {
        setTables(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <ResHeader>Zarezerwuj stolik online już teraz!! </ResHeader>
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
