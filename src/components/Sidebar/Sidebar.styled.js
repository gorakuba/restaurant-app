import styled from "styled-components";

const OpenSidebar = styled.div`
  margin: 30px 0 0 30px;

  &:hover {
    cursor: pointer;
  }
`;

const SidebarStyle = styled.div`
  width: 20%;
  background-color: rgb(255 255 255);

  @media (max-width: 600px) {
    width: 100%;
  }

  .link {
    color: rgb(0 0 0);
    text-decoration: none;
  }
`;

const Close = styled.div`
  margin: 20px 0 0 30px;
  display: flex;
  align-items: center;

  p {
    margin-left: 20px;
    font-weight: 500;
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
