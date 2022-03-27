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
<<<<<<< HEAD
  /* margin-left: 20px; */
=======
>>>>>>> 6e418137e0d325693f1b5125b2c42694b3b1ceb0
  padding: 0 30px 30px 30px;
  width: 75%;

  h1 {
    margin-left: 60px;

    @media (max-width: 730px) {
      margin-left: 20px;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const ContactForms = styled.div`
  ul {
    margin: 50px 50px 50px 40px;
    list-style-type: circle;

    @media (max-width: 730px) {
      margin-left: 20px;
    }

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

      .iconWup {
        margin-left: 20px;
        margin-top: 25px;
        width: 40px;
        height: 40px;

        @media (max-width: 800px) {
          margin-top: 0;
        }
      }

      .contact {
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
  margin: 20px 100px 80px 100px;
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
