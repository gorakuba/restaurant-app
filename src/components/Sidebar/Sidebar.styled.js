import styled from 'styled-components';

export const SidebarStyle = styled.div`
  position: sticky;
  top: 7.5vh;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.xl} {
    position: static;
    top: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 9.3vh;
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

  &:hover {
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    justify-content: center;
  }
`;
