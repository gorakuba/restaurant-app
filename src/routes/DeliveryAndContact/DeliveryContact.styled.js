import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 21vw;
  width: 50vw;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0 9vw;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 70vw;
  }
`;

export const Content = styled.div`
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
  margin: 50px 50px 50px 70px;
  list-style-type: circle;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.color_2};
`;

export const ContactIcon = styled.div`
  margin-left: 20px;
  width: 25px;
  height: 25px;
`;

export const ContactIconWupMail = styled(ContactIcon)`
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
    color: ${(props) => props.theme.colors.color_12};
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
  background-color: ${(props) => props.theme.colors.color_3};
  padding: 2vh;
  border-radius: 20px;
  margin: 30px 60px 80px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 80vw;
    margin: 13px;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
