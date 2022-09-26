import styled from 'styled-components';

export const iconStyle = {
  height: '16px',
  width: '16px',
  marginTop: '4px',
};

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 10px 20px;
  justify-content: space-between;
`;

export const HomeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderLeft = styled.div`
  margin-left: 30px;
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
  color: #000;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    transition: all ease-in-out;
    transition-duration: 300ms;
  }
`;

export const BasketCounter = styled.div`
  font-weight: 900;
`;

export const SwitchModeButton = styled.div`
  height: 30px;
  width: 60px;
  background-color: lightgray;
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
  }

  .lightModeIcon {
    padding: 5px;
    border-radius: 999px;
    color: black !important;
  }

  .darkModeIcon {
    padding: 5px;
    border-radius: 999px;
    color: black !important;
  }
`;
