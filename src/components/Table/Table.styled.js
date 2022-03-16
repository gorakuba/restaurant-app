import styled from "styled-components";

const TableStyle = styled.div`
  background-color: rgb(255, 255, 255);
  width: 47%;
  height: 20vh;
  padding: 10px;
  margin: 30px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

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
`;

const TableBody = styled.div`
  margin: 5px;

  .controls {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;
    margin: 30px 10px 20px 0;
  }
`;

export { TableStyle, TableHeader, TableBody };
