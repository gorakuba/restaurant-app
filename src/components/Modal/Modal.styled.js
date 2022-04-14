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
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
  position: relative;
  top: 40vh;
  z-index: 100;
  border-radius: 10px;
  overflow-y: auto;
  padding: 20px;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: ${(props) =>
    props.color === "color" ? colors.fifthColorType : colors.defaultColorType};
`;

export const ModalLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalLogoTitle = styled.p`
  margin-left: 15px;
  font-weight: 500;
`;

export const ModalContentText = styled.div`
  text-align: center;
`;

export const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 30px;
  width: 30px;
  height: 30px;
`;
