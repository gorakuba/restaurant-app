import styled from 'styled-components';

export const Style = styled.div`
  margin: 20vh auto;
  padding: 20px;
  height: 100%;
  width: 60%;
  color: var(--font);
  display: flex;
  align-items: center;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xl} {
    flex-direction: column;
  }
`;

export const ProductDetailImage = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 60px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 999px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const ProductDetailsHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 140px;
  align-items: center;
`;

export const AddSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: column-reverse;
  margin-bottom: 60px;
`;

export const Counter = styled.div`
  color: ${(props) => props.theme.fonts.colors.productCounterFont};
  margin-top: 70px;
  font-size: ${(props) => props.theme.fonts.size.fontSize24};
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
  }
`;

export const Plus = styled.button`
  padding: 10px;
  width: 160px;
  font-size: ${(props) => props.theme.fonts.size.fontSize16};
  font-weight: 900;
  color: ${(props) => props.theme.fonts.colors.addToBasketButton};
  margin-top: 66px;
  background-color: ${(props) =>
    props.theme.colors.states.addToBasketButtonBackground};
  border: none;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;
