import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 65vw;
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
  padding: 0 30px 30px 30px;
  width: 100%;
  margin: 4vh 4vw 0 20vw;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    margin: 3vh 4vw 0 4.5vw;
    width: 85%;
  }
`;

export const ResHeader = styled.h1`
  margin: 2vh 4vw;
  text-align: center;
`;
