import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};
  padding: 0 30px 0px 10px;
  width: 75%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;
  }
`;

export const ContactHeader = styled.h1`
  margin-left: 50px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 20px;
    text-align: center;
  }
`;

export const ContactList = styled.ul`
  margin: 50px 50px 50px 40px;
  list-style-type: circle;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 20px;
  }
`;

export const ContactLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) =>
    props.color ? props.theme.colors.color_2 : props.theme.defaultColor};
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

  @media ${(props) => props.theme.breakpoints.md} {
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
      props.color ? props.theme.colors.color_12 : props.theme.defaultColor};
    transition: all ease-in-out;
    transition-duration: 200ms;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 1;
  }
`;

export const ContactInfoText = styled.p`
  margin-top: -30px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 0;
  }
`;

export const Map = styled.div`
  height: 550px;
  width: 120vh;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};
  padding: 1rem;
  border-radius: 20px;
  margin: 30px 60px 80px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media ${(props) => props.theme.breakpoints.lg} {
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: none;

  @media ${(props) => props.theme.breakpoints.md} {
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
      props.color ? props.theme.colors.color_11 : props.theme.defaultColor};
    cursor: pointer;
  }
`;
