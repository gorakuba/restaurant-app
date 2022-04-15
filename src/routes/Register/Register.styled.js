import styled from "@emotion/styled";
import { colors } from "../../utilities/colors";

export const Error = styled.div`
  margin: 20px;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
  font-size: 18px;
  font-weight: 700;
`;

export const RegisterIcon = styled.div`
  margin-right: 10px;
`;
