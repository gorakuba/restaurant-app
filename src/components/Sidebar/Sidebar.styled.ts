import styled from 'styled-components';

export const SidebarStyle = styled.div`
  position: sticky;
  top: 7.5vh;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  background: var(--sidebarBackground);

  @media ${(props) => props.theme.breakpoints.xl} {
    position: static;
    top: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 9vh;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  width: 10vw;
  margin: 26px 6px 6px 0;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  color: var(--font);

  @media ${(props) => props.theme.breakpoints.xl} {
    justify-content: center;
    width: 50vw;
  }
`;

export const CloseListItem = styled(ListItem)`
  width: 30px;
  margin-right: 12px;
  background: none;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    border-bottom: none;
    margin-right: 0;
  }
`;
