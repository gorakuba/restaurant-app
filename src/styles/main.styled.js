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