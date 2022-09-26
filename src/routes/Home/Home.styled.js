import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 82vh;

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
  margin: 0 20px 20px 20px;
  padding: 0 30px 30px 30px;

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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    width: 220px;
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;
