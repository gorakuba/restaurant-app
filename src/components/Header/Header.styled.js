import styled from "styled-components";

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 10px 25px;
  background-color: rgb(30 144 255);
  margin-bottom: 30px;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  .link {
    text-decoration: none;
    color: rgb(0 0 0);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    cursor: pointer;
  }
`;

const HeaderMiddle = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  @media (max-width: 730px) {
    display: none;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px 20px;

  .headerRightIcon {
    padding-left: 15px;
    padding-right: 15px;
    color: rgb(0 0 0);
  }

  .headerRightIcon:hover {
    cursor: pointer;
    transform: scale(1.15);
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;

const BasketCounter = styled.div`
  font-weight: 900;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export { HeaderStyle, HeaderLeft, HeaderMiddle, HeaderRight, BasketCounter };
