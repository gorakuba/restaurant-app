import styled from "@emotion/styled";
import { colors } from "../../utilities/colors";

export const Error = styled.div`
  margin: 20px;

  .link {
    text-decoration: none;
  }
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.color === "color" ? colors.secondColorType : colors.defaultColorType};
  font-size: 18px;
  font-weight: 700;

  .icon {
    margin-right: 10px;
  }
`;
