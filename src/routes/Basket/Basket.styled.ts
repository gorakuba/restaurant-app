import styled from 'styled-components';

export const BasketStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  width: 50vw;
  color: var(--font);
`;

export const HeaderLine = styled.div`
  display: flex;

  border-bottom: 1px solid gray;
`;

export const LeftHeaderSide = styled.div`
  justify-content: flex-start;
  width: 70%;
`;

export const RightHeaderSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

export const ContinueShoppingCheckout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContinueShopping = styled.div`
  h5 {
    font-weight: 100;
    color: #1e90ff;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 1px solid #1e90ff;
  }
`;

export const Checkout = styled.div`
  button {
    width: 140px;
    font-weight: 700;
    color: #fff;
    background-color: #1e90ff;
    height: 40px;
    text-transform: uppercase;
    padding: 10px;
    text-align: center;
    border: none;
  }
`;

export const UpdateCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 10vh;
`;

export const SubTotal = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const Update = styled(Checkout)`
  margin-top: 30px;

  button {
    width: 100px;
    border: 2px solid #1e90ff;
    color: #1e90ff;
    background-color: transparent;
  }
`;
