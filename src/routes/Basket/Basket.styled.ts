import styled from 'styled-components';

export const BasketStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  width: 50vw;
  color: var(--font);

  h5 {
    margin-top: 30px;
    text-align: center;
    font-weight: 100;
  }
`;

export const HeaderLine = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.states.gray};
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

export const ContinueShoppingBasketLenght = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContinueShopping = styled.div`
  h5 {
    font-weight: 100;
    color: ${(props) => props.theme.colors.light.header};
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 1px solid ${(props) => props.theme.colors.light.header};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Checkout = styled.div`
  button {
    width: 140px;
    font-weight: 700;
    color: ${(props) => props.theme.fonts.colors.whiteFont};
    background-color: ${(props) => props.theme.colors.light.header};
    height: 40px;
    text-transform: uppercase;
    padding: 10px;
    text-align: center;
    border: none;
    margin-bottom: 30px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ItemsInBasket = styled(Checkout)`
  font-weight: 100;
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
  font-size: ${(props) => props.theme.fonts.size.fontSize16};
`;

export const Update = styled(Checkout)`
  margin-top: 30px;

  button {
    width: 100px;
    border: 2px solid ${(props) => props.theme.colors.light.header};
    color: ${(props) => props.theme.colors.light.header};
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const BasketProductLook = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110%;
`;

export const DeleteIconItem = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  color: ${(props) => props.theme.fonts.colors.redFont};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform ease-in-out;
  }
`;
