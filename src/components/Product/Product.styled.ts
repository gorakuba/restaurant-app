import styled from 'styled-components';

export const ProductStyle = styled.div`
  height: 200px;
  padding: 15px;
  margin: 30px 10px 60px 10px;

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

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Name = styled.h3`
  margin-left: 10px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AddSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 0 0 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
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

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px auto 0 auto;
  }
`;

export const Plus = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px auto 0 auto;
  }
`;

export const Price = styled.div`
  margin-right: 10px;
  font-weight: 500;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px auto 0 auto;
  }
`;

export const Description = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding: 10px;
`;
