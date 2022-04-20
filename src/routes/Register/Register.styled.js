import styled from "@emotion/styled";

export const Error = styled.div`
  margin: 20px;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.color ? props.theme.colors.color_2 : props.theme.defaultColor};
  font-size: 18px;
  font-weight: 700;
`;

export const RegisterIcon = styled.div`
  margin-right: 10px;
`;
