import styled from "styled-components";
import { colors } from "../../utilities/colors";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 0 30px 30px 10px;
  width: 75%;

  h1 {
    margin-left: 50px;

    @media (max-width: 730px) {
      margin-left: 20px;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;
  }
`;

export const ContactForms = styled.div`
  ul {
    margin: 50px 50px 50px 40px;
    list-style-type: circle;

    @media (max-width: 730px) {
      margin-left: 20px;
    }

    a {
      text-decoration: none;
      color: ${(props) =>
        props.color === "color"
          ? colors.secondColorType
          : colors.defaultColorType};
      display: flex;
      align-items: center;

      .contact__link {
        display: flex;
        align-items: center;
      }

      .contact__icon {
        margin-left: 20px;
        width: 40px;
        height: 40px;
      }

      .contact__iconWup {
        margin-left: 20px;
        margin-top: 25px;
        width: 40px;
        height: 40px;

        @media (max-width: 800px) {
          margin-top: 0;
        }
      }

      .contact__contact {
        p {
          margin-top: -30px;

          @media (max-width: 800px) {
            margin-top: 0;
          }
        }
      }

      li {
        line-height: 5;
        font-size: 20px;
        font-weight: 400;
        padding: 5px;
        font-weight: 500;

        &:hover {
          cursor: pointer;
          border: none;
          font-weight: 600;
          text-decoration: underline;
          transition: all ease-in-out;
          transition-duration: 600ms;
          word-break: break-all;
        }

        @media (max-width: 730px) {
          line-height: 1;
        }
      }
    }
  }
`;

export const Map = styled.div`
  height: 500px;
  width: 150vh;
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  padding: 1rem;
  border-radius: 20px;
  margin: 30px 60px 50px 0;
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

  h3 {
    text-align: center;
  }

  button {
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
  }
`;
