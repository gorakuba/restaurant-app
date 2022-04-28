import styled from "styled-components";

export const ProductStyle = styled.div`
  width: 90%;
  padding: 15px;
  margin: 30px 10px 10px 50px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #fdfffc;

  &:first-child {
    margin-top: 0px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
    width: 95%;
  }
`;

export const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Name = styled.h3`
  margin-left: 10px;
`;

export const RemoveSection = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 0 0 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

export const Minus = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px auto 0 auto;
  }
`;

export const Price = styled.div`
  display: flex;
  margin: 0 10px 0 0;
  font-weight: 500;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px auto 0 auto;
  }
`;

export const Description = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: black;
  padding: 10px;
`;
