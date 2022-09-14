import styled from 'styled-components';

export const Style = styled.div`
  width: 40%;
  margin: 13vh 0 10px 10px;
  padding: 60px 0 30px 30px;
  height: 62vh;
  position: fixed;
  left: 54vw;
  background-color: rgb(245 245 245);
  border-left: 3px solid rgb(30 144 255);
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;

export const ProductDetails = styled.div`
  h2,
  h3 {
    margin-bottom: 50px;
  }

  p {
    margin-top: 100px;
  }
`;

export const CloseIconDiv = styled.div`
  cursor: pointer;
`;

export const NoProductSelected = styled.div`
  width: 40%;
  margin: 13vh 30px 10px 10px;
  padding: 60px 0 30px 30px;
  height: 62vh;
  position: fixed;
  left: 59.8vw;
  margin-left: auto;
  margin-right: auto;

  p {
    height: 50px;
    padding: 10px 30px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    background-image: linear-gradient(
      to right,
      rgb(245 245 245),
      rgb(30 144 255)
    );
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;
