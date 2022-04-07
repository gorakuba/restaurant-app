import styled from "styled-components";
import { colors } from "../../utilities/colors";
import { fonts } from "../../utilities/fonts";

export const OpenSidebar = styled.div`
  margin: 33px 0 20px 50px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-left: 55px;
  }
`;

export const SidebarStyle = styled.div`
  width: 20%;
  background-color: ${(props) => (props.color ? colors.thirdColorType : null)};
  margin: 0 20px 20px 20px;

  .link {
    color: ${(props) => (props.color ? colors.secondColorType : null)};
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Close = styled.div`
  margin: 20px 0 20px 30px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: left;
    margin: 30px 0 20px 70px;
  }

  p {
    margin-left: 20px;
    font-weight: 500;

    @media (max-width: 600px) {
      display: none;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 20px;
  width: 70%;
  height: 30px;
  font-size: 16px;
  font-family: ${(props) => (props.color ? fonts.thirdFontColor : null)};

  @media (max-width: 800px) {
    width: 100%;
    margin: 10px;
    justify-content: center;
  }

  .menuIcon {
    font-size: 14px;
    font-weight: 300;

    @media (max-width: 800px) {
      display: none;
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.color ? colors.sixthColorType : null};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    width: 80%;
    box-shadow: 0 10px 20px
      ${(props) => (props.color ? colors.fourthColorType : null)};
    transition: all ease-in-out;
    transition-duration: 400ms;

    @media (max-width: 800px) {
      &:hover {
        width: 100%;
      }
    }
  }
`;
