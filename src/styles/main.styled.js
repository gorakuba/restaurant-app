import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 50%;
  padding: 60px 30px 30px 30px;
  z-index: 1;

  h2 {
    font-weight: 400;
    margin: 0 20px 20px 1vw;

    @media ${(props) => props.theme.breakpoints.md} {
      margin: 0 20px 20px 3vw;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 100%;
  }
`;
