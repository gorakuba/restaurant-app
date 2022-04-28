import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.color_1};
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const HomeLink = styled.div`
  color: ${(props) => props.theme.colors.color_2};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderLeft = styled.div`
  margin-left: 30px;
`;

export const HeaderLeftTitle = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.font_1};

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px 20px;
`;

export const HeaderRightIcon = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  color: ${(props) => props.theme.colors.color_2};

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;

export const BasketCounter = styled.div`
  font-weight: 900;
  font-family: ${(props) => props.theme.fonts.font_2}, sans-serif;
`;
