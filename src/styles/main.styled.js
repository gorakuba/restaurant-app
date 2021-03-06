import styled from "styled-components";

export const Container = styled.div`
  width: 65vw;
  display: flex;
  margin: 4vh 20vw;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    width: 100%;
    margin: 4vh auto;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 70vw;
  }
`;

export const Content = styled.div`
  padding: 30px;
  margin: -2vh 4vw 0 20vw;
  z-index: 1;

  h1 {
    font-family: ${(props) => props.theme.fonts.font_2};
    margin: 0 20px 20px 1vw;

    @media ${(props) => props.theme.breakpoints.md} {
      margin: 0 20px 20px 3vw;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 3vh 4vw 0 3vw;
  }
`;

export const NotLogged = styled.h1`
  margin: 30px;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.font_4};

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 0 30px 0;
    text-align: center;
  }
`;

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
