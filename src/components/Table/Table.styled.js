import styled from "styled-components";

const TableStyle = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20vh;
  padding: 10px;
  margin: 50px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (min-width: 1500px) {
    width: 47%;
  }

  @media (max-width: 1499px) {
    height: auto;
    padding-bottom: 3vh;
  }

  h4 {
    margin: 5px;
  }

  button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      transition: all ease-in-out;
      transition-duration: 400ms;
      cursor: pointer;
    }
  }

  .number {
    padding: 5px;
    margin-left: 10px;
    text-align: center;
    width: 50px;
    height: 20px;
    border-radius: 10px;
    border: none;
    background-color: rgb(245 245 245);
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
  font-size: 20px;

  h4 {
    display: flex;
    align-items: center;

    .tableIcon {
      margin-right: 10px;
    }
  }

  .removeReservation {
    height: 40px;
    width: 100px;
  }
`;

const TableBody = styled.div`
  margin: 10px 5px 0 5px;

  h1 {
    margin-top: -10px;
  }

  .controls {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;
    margin: 15px 10px 20px 0;
  }

  h5 {
    font-weight: 100;
    font-style: italic;
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      margin-top: 50px;
    }

    .dotsIcon {
      margin-right: 10px;
      margin-left: 4px;
      font-size: 18px;
    }
  }

  p {
    font-style: italic;
    font-weight: 100;
  }

  .head {
    display: flex;
    align-items: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const ChairSection = styled.div`
  display: flex;
  justify-content: start;
  margin: 10px;

  p {
    font-style: italic;
    font-weight: 100;
  }
`;

const ChairHeader = styled.div`
  display: flex;
  align-items: center;

  .chairIcon {
    height: 30px;
    width: 30px;
    padding: 5px;
    margin: 5px 10px 5px 10px;
  }

  .deletePersonButton {
    &:hover {
      background-color: rgb(255, 0, 0);
      cursor: pointer;
      transition: all ease-in-out;
      transition-duration: 400ms;
    }
  }
`;

const CancelSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;

  @media (max-width: 800px) {
    margin-top: 10px;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CancelReservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 80px;

  @media (max-width: 800px) {
    margin-left: 40px;
    flex-direction: column;
  }

  .controlsCancel {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin: 30px 20px 20px 0;
  }
`;

export {
  TableStyle,
  TableHeader,
  TableBody,
  ChairSection,
  Buttons,
  CancelSection,
  Header,
  ChairHeader,
  CancelReservation,
};
