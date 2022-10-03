import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 40%;
  padding: 60px 30px 30px 30px;
  color: var(--font);

  h2 {
    font-weight: 400;
    margin: 0 20px 20px 1vw;

    @media ${(props) => props.theme.breakpoints.md} {
      margin: 0 20px 20px 3vw;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 100%;

    h2 {
      text-align: center;
    }
  }
`;
