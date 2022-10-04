import styled from 'styled-components';

export const Style = styled.div`
  width: 40%;
  margin: 13vh 0 10px 10px;
  padding: 20px 40px 30px 30px;
  position: fixed;
  left: 60vw;
  color: var(--font);
  background: var(--productDetailsGradientOpen);
  border-left: var(--productDetailsBorderColor);
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
  position: relative;
  top: 20px;
  width: 33px;
  height: 33px;
  padding: 5px;
  border-radius: 999px;
  color: red;

  &:hover {
    cursor: pointer;
  }
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
  color: var(--font);

  p {
    height: 50px;
    padding: 10px 30px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    background-image: var(--productDetailsGradient);
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`;
