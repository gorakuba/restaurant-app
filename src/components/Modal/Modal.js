import React from "react";
import {
  Background,
  ModalWraper,
  ModalContent,
  CloseModalButton,
} from "./Modal.styled";
import ModalLogic from "./ModalLogic";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Modal = ({ setCloseModal }) => {
  const { closeModal, modalRef, showModal } = ModalLogic();

  return (
    <>
      <Background ref={modalRef} onClick={closeModal}>
        <ModalWraper showModal={showModal} color>
          <ModalContent color>
            <div className='modal'>
              <div className='modal__logo'>
                <RestaurantIcon />
                <p className='modal__p'>Our Restaurant</p>
              </div>
              <div className='modal__description'>
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
              </div>
            </div>
          </ModalContent>
          <CloseModalButton onClick={() => setCloseModal(false)} />
        </ModalWraper>
      </Background>
    </>
  );
};

export default Modal;
