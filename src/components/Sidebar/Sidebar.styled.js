import styled from "styled-components";

const OpenSidebar = styled.div`
  margin: 33px 0 20px 30px;

  &:hover {
    cursor: pointer;
    transform: rotateY(180deg);
    transition: all ease-in-out;
    transition-duration: 0.9s;
  }

  @media (max-width: 600px) {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
  }
`;

const SidebarStyle = styled.div`
  width: 20%;
  background-color: rgb(255 255 255);

  .link {
    color: rgb(0 0 0);
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Close = styled.div`
  margin: 20px 0 20px 30px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: left;
    margin: 30px 0 20px 65px;
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

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 20px;
  width: 70%;
  height: 30px;
  font-size: 16px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media (max-width: 600px) {
    width: 100%;
    margin: 5px;
    justify-content: center;
  }

  .menuIcon {
    font-size: 14px;
    font-weight: 300;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  &:hover {
    background-color: rgb(245 245 245);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    width: 80%;
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export { SidebarStyle, ListItem, OpenSidebar, Close };
