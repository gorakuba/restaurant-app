import styled from 'styled-components';

export const BasketStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50vw;

  @media ${(props) => props.theme.breakpoints.xl} {
    flex-direction: column-reverse;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 70vw;
  }
`;

export const LeftSide = styled.div`
  margin-top: 50px;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 60px 0 20px -20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const RightSide = styled.div`
  height: 30vh;
  width: 25vw;
  margin-top: 50px;
  margin-bottom: 15vh;
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
    margin: 20px auto 60px auto;
    box-shadow: none;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    height: auto;

    margin: 5vh auto 60px auto;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: auto;
    margin-left: auto;
    margin-right: auto;
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
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.color_7};
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const BasketDeleteButton = styled(BasketAddButton)`
  margin-top: 20px;
  padding: 17px;

  &:hover {
    background-color: ${(props) => props.theme.colors.color_6};
  }
`;

export const Checkout = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 14px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.color_10};
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
  font-family: ${(props) => props.theme.fonts.font_4};

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 0 30px 0;
    text-align: center;
  }
`;

export const NotLogged = styled(EmptyBasket)``;

export const LoginButton = styled.button`
  margin-top: 50px;
  padding: 5px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.color_2};
  font-family: ${(props) => props.theme.fonts.font_3};
  font-weight: 700;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    width: 220px;
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;
