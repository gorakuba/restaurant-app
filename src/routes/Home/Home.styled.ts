import styled from 'styled-components';

export const Container = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 20px 20px 20px;
  padding: 0 30px 30px 30px;
  color: var(--font);

  p {
    width: 50vw;
    text-align: center;
  }

  h1 {
    text-align: center;
  }
`;

export const StartShopButton = styled.button`
  position: relative;
  top: 20vh;
  padding: 5px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    width: 220px;
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;
