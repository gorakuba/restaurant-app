import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  margin: 0 auto;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 70vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  text-align: justify;
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};
  padding: 0 30px 30px 30px;

  h1 {
    text-align: center;
  }
`;

export const Button = styled.button`
  margin-top: 50px;
  padding: 5px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: ${(props) =>
    props.color ? props.theme.colors.color_2 : props.theme.defaultColor};
  font-family: ${(props) =>
    props.font ? props.theme.fonts.font_3 : props.theme.defaultFont};
  font-weight: 700;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    width: 220px;
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;
