import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: ${(props) =>
    props.color ? props.theme.colors.color_3 : props.theme.defaultColor};
  width: 100%;
  padding: 15px;
  margin: 30px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &:first-child {
    margin-top: 0px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 95%;
    margin-left: 12.5px;
  }
`;

export const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 0;
`;

export const Name = styled.h3`
  margin-left: 10px;
`;

export const AddSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 0 0 10px;
`;

export const Counter = styled.div`
  font-size: 20px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Plus = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Price = styled.div`
  display: flex;
  margin: 0 10px 0 0;
  font-weight: 500;
`;

export const Description = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) =>
    props.color ? props.theme.colors.color_2 : props.theme.defaultColor};
  padding: 10px;
`;
