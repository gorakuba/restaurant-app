import styled from "styled-components";

const SidebarStyle = styled.div`
  width: 20%;
  background-color: rgb(255 255 255);

  .link {
    color: rgb(0 0 0);
    text-decoration: none;
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

export { SidebarStyle, ListItem };
