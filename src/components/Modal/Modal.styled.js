import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../../utilities/colors";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0.25vh;

  @media (max-width: 800px) {
    height: auto;
  }
`;

export const ModalWraper = styled.div`
  width: 700px;
  max-height: 700px;
  box-shadow: 0 5px 16px
    ${(props) =>
      props.color === "color"
        ? colors.fourthColorType
        : colors.defaultColorType};
  background: #fff;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
  position: relative;
  top: 40vh;
  z-index: 100;
  border-radius: 10px;
  overflow-y: auto;

  @media (max-width: 600px) {
    margin: 5vh;
    height: auto;
  }

  @media (min-width: 1400px) {
    height: auto;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  padding: 20px;
  color: ${(props) =>
    props.color === "color" ? colors.fifthColorType : colors.defaultColorType};

  .modal__logo {
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 15px;
    font-weight: 500;
  }
`;

export const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
`;
