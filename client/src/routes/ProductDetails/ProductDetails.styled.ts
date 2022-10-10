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
  justify-content: space-between;
  height: 140px;
  align-items: center;
`;

export const PlusButton = styled.button`
  padding: 6px;
  height: 40px;
  width: 160px;
  font-size: ${(props) => props.theme.fonts.size.fontSize16};
  font-weight: 900;
  color: ${(props) => props.theme.fonts.colors.addToBasketButton};
  margin-top: 32px;
  background-color: ${(props) =>
    props.theme.colors.states.addToBasketButtonBackground};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
