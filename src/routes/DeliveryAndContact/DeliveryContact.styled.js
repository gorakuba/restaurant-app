import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgb(255 255 255);

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  background-color: rgb(255 255 255);
  margin-left: 20px;
  padding: 0 30px 30px 30px;
  width: 75%;

  h1 {
    margin-left: 60px;
  }

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;

    h1 {
      text-align: center;
    }
  }
`;

const ContactForms = styled.div`
  ul {
    margin: 50px 50px 50px 40px;
    list-style-type: circle;

    a {
      text-decoration: none;
      color: rgb(0 0 0);
      display: flex;
      align-items: center;

      .link {
        display: flex;
        align-items: center;
      }

      .icon {
        margin-left: 20px;
        width: 40px;
        height: 40px;
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
          line-height: 3;

          &:hover {
          }
        }
      }
    }
  }
`;

const Map = styled.div`
  height: 500px;
  width: 150vh;
  background-color: rgb(255 255 255);
  padding: 1rem;
  border-radius: 20px;
  margin: 30px 100px 50px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    width: 95%;
    margin: 13px;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 100px 50px 100px;
  padding: 50px 50px 20px 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: none;

  @media (max-width: 800px) {
    width: 78%;
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
      background-color: lightblue;
      cursor: pointer;
    }
  }
`;

export { Container, Content, ContactForms, Map, Footer };
