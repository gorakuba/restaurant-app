import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`;

export const Content = styled.div`
  padding: 0 30px 30px 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const ResHeader = styled.h1`
  margin: 30vh 4vw;
  text-align: center;
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
