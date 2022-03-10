import React, { useRef, useState } from "react";

const ModalLogic = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const modalOpen = () => {
    setShowModal((prevModal) => !prevModal);
  };

  return { modalOpen, modalRef, showModal };
};

export default ModalLogic;
