import styled from "styled-components";
import { colors } from "../../utilities/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 0 30px 0px 10px;
  width: 75%;

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;
  }
`;

export const ContactHeader = styled.h1`
  margin-left: 50px;

  @media (max-width: 730px) {
    margin-left: 20px;
    text-align: center;
  }
`;

export const ContactList = styled.ul`
  margin: 50px 50px 50px 40px;
  list-style-type: circle;

  @media (max-width: 730px) {
    margin-left: 20px;
  }
`;

export const ContactLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
`;

export const ContactIcon = styled.div`
  margin-left: 20px;
  width: 25px;
  height: 25px;
`;

export const ContactIconWup = styled(ContactIcon)`
  margin-left: 20px;
  margin-top: 40px;
  width: 40px;
  height: 40px;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

export const ContactItems = styled.li`
  line-height: 4;
  font-size: 20px;
  font-weight: 400;
  padding: 5px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    border: none;
    color: ${(props) =>
      props.color === "color"
        ? colors.fourteenthColorType
        : colors.defaultColorType};
    transition: all ease-in-out;
    transition-duration: 200ms;
  }

  @media (max-width: 730px) {
    line-height: 1;
  }
`;

export const ContactInfoText = styled.p`
  margin-top: -30px;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

export const Map = styled.div`
  height: 550px;
  width: 120vh;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 1rem;
  border-radius: 20px;
  margin: 30px 60px 80px 0;
  box-shadow: 0 10px 20px
    ${(props) =>
      props.color === "color"
        ? colors.fourthColorType
        : colors.defaultColorType};

  @media (max-width: 1000px) {
    width: 97%;
    margin: 13px;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 60px 80px 60px;
  padding: 50px 50px 20px 50px;
  box-shadow: 0 10px 20px
    ${(props) =>
      props.color === "color"
        ? colors.fourthColorType
        : colors.defaultColorType};
  border-radius: 20px;
  border: none;

  @media (max-width: 800px) {
    width: 80%;
    margin: 13px;
  }
`;

export const FooterHeader = styled.h3`
  text-align: center;
`;

export const FooterButton = styled.button`
  width: 150px;
  padding: 10px;
  margin: 50px 10px 50px 10px;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: ${(props) =>
      props.color === "color"
        ? colors.thirteenthColorType
        : colors.defaultColorType};
    cursor: pointer;
  }
`;
