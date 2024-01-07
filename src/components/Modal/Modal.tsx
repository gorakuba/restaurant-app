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
import { useDispatch } from 'react-redux';
import { closeModal } from '../../slices/ModalSlice';
import { modalAnimations } from '../../utils/animations';

const Modal = () => {
  const [modalContent, setModalContent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/modal-content')
      .then((response) => response.json())
      .then((data) => {
        setModalContent(data);
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
