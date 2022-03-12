import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgb(255 255 255);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  background-color: rgb(255 255 255);
  padding: 0 30px 30px 30px;
  width: 75%;

  h1 {
    margin-left: 65px;
  }

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const ContactForms = styled.div`
  ul {
    margin: 70px 50px 50px 50px;
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
          letter-spacing: 3px;
          transition: all ease-in-out;
          transition-duration: 600ms;
        }
      }
    }
  }
`;

export { Container, Content, ContactForms };
