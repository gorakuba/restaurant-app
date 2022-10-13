import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: var(--font);

  h2 {
    font-weight: 400;
    padding: 30px 30px 30px 60px;
    margin: 30px;

    @media ${(props) => props.theme.breakpoints.xl} {
      padding-left: 30px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
