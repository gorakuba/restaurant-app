import styled from 'styled-components';

export const ProductStyle = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  color: var(--font);
`;

export const ProductSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const RemoveSection = styled.div`
  width: 27%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Count = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Price = styled.div`
  display: flex;
  font-weight: 500;
`;
