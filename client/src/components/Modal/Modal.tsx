import { useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { closeModal } from '../../slices/ModalSlice';
import { modalAnimations } from '../../utils/animations';

const Modal = () => {
  const [modalContent, setModalContent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<any>('http://localhost:3001/modal-content')
      .then((response) => {
        setModalContent(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return (
    <motion.div {...modalAnimations}>
      <Background onClick={() => dispatch(closeModal())}>
        <ModalWraper>
          {modalContent.map((content: any) => (
            <ModalContent key={content.id}>
              <ModalLogo>
                <RestaurantIcon />
                <ModalLogoTitle>{content.title}</ModalLogoTitle>
              </ModalLogo>
              <ModalContentText>{content.content}</ModalContentText>
            </ModalContent>
          ))}
          <CloseModalButton onClick={() => dispatch(closeModal())} />
        </ModalWraper>
      </Background>
    </motion.div>
  );
};

export default Modal;
