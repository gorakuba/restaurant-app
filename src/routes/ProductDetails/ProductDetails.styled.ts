import styled from 'styled-components';

export const Style = styled.div`
  margin: 14vh;
  padding: 20px;
  height: 100%;
  color: var(--font);
  border-left: var(--productDetailsBorderColor);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xl} {
    flex-direction: column;
  }
`;

export const ProductDetailImage = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 60px;

  img {
    width: 500px;
    height: 500px;
    border-radius: 999px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-right: 0;
  }
`;

export const ProductDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 140px;
  align-items: center;
`;

export const PlusButton = styled.button`
  padding: 6px;
  height: 40px;
  width: 120px;
  font-size: 12px;
  font-weight: 900;
  color: #3d3d3d;
  margin-top: 32px;
  background-color: #ffd600;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
