import React, { useEffect, useState } from 'react';

import ModalLogic from './ModalLogic';
import {
  Background,
  ModalWraper,
  ModalContent,
  CloseModalButton,
  ModalLogo,
  ModalLogoTitle,
  ModalContentText,
} from './Modal.styled';

import RestaurantIcon from '@mui/icons-material/Restaurant';

import { motion } from 'framer-motion';

import axios from 'axios';

const Modal = ({ setCloseModal }) => {
  const { closeModal, modalRef, showModal } = ModalLogic();
  const [modalContent, setModalContent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/modal-content')
      .then((response) => {
        setModalContent(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginTop: -1200 }}
        animate={{ opacity: 1, marginTop: -800 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWraper showModal={showModal}>
            {modalContent.map((content) => (
              <ModalContent key={content.id}>
                <ModalLogo>
                  <RestaurantIcon />
                  <ModalLogoTitle>{content.title}</ModalLogoTitle>
                </ModalLogo>
                <ModalContentText>{content.content}</ModalContentText>
              </ModalContent>
            ))}
            <CloseModalButton onClick={() => setCloseModal(false)} />
          </ModalWraper>
        </Background>
      </motion.div>
    </>
  );
};

export default Modal;
