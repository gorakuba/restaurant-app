import React from "react";
import {
  Background,
  ModalWraper,
  ModalContent,
  CloseModalButton,
  ModalLogo,
  ModalLogoTitle,
  ModalContentText,
} from "./Modal.styled";
import ModalLogic from "./ModalLogic";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { color } from "../../utilities/colors";
import { motion } from "framer-motion";

const Modal = ({ setCloseModal }) => {
  const { closeModal, modalRef, showModal } = ModalLogic();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginTop: -1200 }}
        animate={{ opacity: 1, marginTop: -900 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWraper showModal={showModal} color={color}>
            <ModalContent color={color}>
              <ModalLogo>
                <RestaurantIcon />
                <ModalLogoTitle>Our Restaurant</ModalLogoTitle>
              </ModalLogo>
              <ModalContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                finibus tincidunt ipsum ac commodo. Sed pulvinar posuere dolor,
                in pretium orci. In nec ex eu arcu maximus ultrices. Fusce sem
                augue, luctus ut elit ut, maximus lacinia risus. Quisque eget
                quam ac ante pulvinar vehicula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi finibus tincidunt ipsum ac
                commodo. Sed pulvinar posuere dolor, in pretium orci. In nec ex
                eu arcu maximus ultrices. Fusce sem augue, luctus ut elit ut,
                maximus lacinia risus. Quisque eget quam ac ante pulvinar
                vehicula.
              </ModalContentText>
            </ModalContent>
            <CloseModalButton onClick={() => setCloseModal(false)} />
          </ModalWraper>
        </Background>
      </motion.div>
    </>
  );
};

export default Modal;
