import styled from "styled-components";

export const OpenSidebar = styled.div`
  position: fixed;
  left: 14vw;
  top: 17vh;
  width: auto;
  margin: 20px 0 20px 60px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.color_2};

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    position: static;
    top: auto;
  }
`;

export const OpenSidebarTitle = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

export const SidebarStyle = styled.div`
  position: fixed;
  left: 14vw;
  top: 17vh;
  width: 20%;
  margin: 0 20px 20px 30px;

  @media ${(props) => props.theme.breakpoints.md} {
    position: static;
    top: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    height: 80vh;
    overflow: auto;
  }
`;

export const Close = styled.div`
  margin: 20px 0 40px 30px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    justify-content: left;
    margin: 30px 0 20px 10px;
  }
`;

export const CloseSidebarTitle = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px 25px 10px;
  margin: 20px;
  width: 70%;
  height: 30px;
  border-radius: 10px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.font_3};

  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
    font-weight: 700;
    width: 80%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: all ease-in-out;
    transition-duration: 400ms;

    @media ${(props) => props.theme.breakpoints.md} {
      &:hover {
        width: 100%;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 10px;
    justify-content: center;
  }
`;

export const ArrowIcon = styled.div`
  margin-left: 20px;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  font-size: 14px;
  font-weight: 300;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
