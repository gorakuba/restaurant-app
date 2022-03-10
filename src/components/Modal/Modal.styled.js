import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0.5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin: 5vh;
    height: auto;
  }
`;

const ModalWraper = styled.div`
  width: 700px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  top: 40vh;
  z-index: 100;
  border-radius: 10px;

  @media (max-width: 600px) {
    margin: 5vh;
    height: auto;
  }

  @media (min-width: 1400px) {
    height: auto;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  padding: 20px;
  color: #141414;

  .modal__logo {
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 15px;
    font-weight: 500;
  }
`;

const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
`;

export { Background, ModalWraper, ModalContent, CloseModalButton };
