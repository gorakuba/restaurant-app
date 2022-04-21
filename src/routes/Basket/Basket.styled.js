import styled from "styled-components";

export const BasketStyle = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};
  margin: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
    align-items: center;
    margin: 10px;
    width: 97.5%;
  }
`;

export const LeftSide = styled.div`
  margin-top: 30px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 20px 20px -10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const RightSide = styled.div`
  height: 30vh;
  width: 25vw;
  margin-left: 10px;
  margin-top: 5vh;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  font-style: italic;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: auto;
    margin: 20px 60px 60px 60px;
    box-shadow: none;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: auto;
    height: auto;
    margin-left: 30px;
  }
`;

export const ItemsCount = styled.p`
  padding-bottom: 1vh;
`;

export const ItemsPrice = styled.p`
  padding-bottom: 4vh;
`;

export const BasketAddButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.color ? props.theme.colors.color_7 : props.theme.defaultColor};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const BasketDeleteButton = styled(BasketAddButton)`
  margin-top: 20px;
  padding: 17px;

  &:hover {
    background-color: ${(props) =>
      props.color ? props.theme.colors.color_6 : props.theme.defaultColor};
  }
`;

export const Checkout = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: 14px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.color ? props.theme.colors.color_10 : props.theme.defaultColor};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const CheckoutIcon = styled.div`
  margin-left: 10px;
`;

export const EmptyBasket = styled.h1`
  margin: 30px;
  font-weight: 700;
  font-family: ${(props) =>
    props.font ? props.theme.fonts.font_4 : props.theme.defaultFont};

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0;
    text-align: center;
  }
`;
