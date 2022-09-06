import styled from 'styled-components';

export const SidebarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;

  @media ${(props) => props.theme.breakpoints.md} {
    position: static;
    top: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: 80vh;
    overflow: auto;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
  width: 150px;
  margin: 26px 6px 6px 6px;
  height: 30px;
  border-radius: 10px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.font_3};

  &:hover {
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }
`;
