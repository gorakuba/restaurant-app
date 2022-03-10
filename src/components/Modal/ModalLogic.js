import { useCallback, useEffect, useRef, useState } from "react";

const ModalLogic = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return {
    closeModal,
    modalRef,
    showModal,
    setShowModal,
    openModal,
  };
};

export default ModalLogic;
