import React from "react";
import { ModalStyle } from "./Modal.styled";
import ModalLogic from "./ModalLogic";

const Modal = () => {
  const { modalOpen, modalRef, showModal } = ModalLogic();

  return <>{showModal ? <ModalStyle>modal</ModalStyle> : null}</>;
};

export default Modal;
