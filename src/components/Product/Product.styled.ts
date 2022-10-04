import styled from 'styled-components';

export const ProductStyle = styled.div`
  height: 240px;
  padding: 14px;
  width: 30vw;
  margin: 4px;
  background-color: var(--productBackground);
  box-shadow: var(--productBoxShadow);
`;

export const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 4px;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 100;
  height: 60px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AddSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: column-reverse;
`;

export const Counter = styled.div`
  color: #565656;
  margin-top: 70px;
  font-size: 20px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
  }
`;

export const Plus = styled.button`
  padding: 6px;
  width: 120px;
  font-size: 12px;
  font-weight: 900;
  color: #3d3d3d;
  margin-top: 66px;
  background-color: #ffd600;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Price = styled.div`
  font-weight: 500;
`;
