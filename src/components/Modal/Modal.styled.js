import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0.25vh;

  @media ${(props) => props.theme.breakpoints.md} {
    height: auto;
  }
`;

export const ModalWraper = styled.div`
  width: 700px;
  max-height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 40vh;
  z-index: 100;
  border-radius: 10px;
  overflow-y: auto;
  padding: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 5vh;
    height: auto;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
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
  top: 20px;
  right: 30px;
  width: 30px;
  height: 30px;
`;
