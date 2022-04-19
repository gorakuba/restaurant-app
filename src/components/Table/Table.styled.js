import styled from "styled-components";
import { colors } from "../../utilities/colors";

export const TableStyle = styled.div`
  background-color: ${(props) =>
    props.color === "color" ? colors.thirdColorType : colors.defaultColorType};
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 50px 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 0 10px 20px
    ${(props) =>
      props.color === "color"
        ? colors.fourthColorType
        : colors.defaultColorType};

  @media (max-width: 1499px) {
    height: auto;
    padding-bottom: 3vh;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
  font-size: 20px;
`;

export const TableHeaderTitle = styled.h4`
  margin: 5px;
  display: flex;
  align-items: center;
`;

export const TableIcon = styled.div`
  margin-top: 5px;
  margin-right: 10px;
`;

export const ReservationButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 10px 20px
      ${(props) =>
        props.color === "color"
          ? colors.fourthColorType
          : colors.defaultColorType};
    transition: all ease-in-out;
    transition-duration: 400ms;
    cursor: pointer;
  }
`;

export const CancelReservationButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const TableBody = styled.div`
  margin: 10px 5px 0 5px;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  margin-bottom: 4vh;
`;

export const CancelReservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CancelQuestion = styled.p`
  font-style: italic;
  font-weight: 100;
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: 80px;

  @media (max-width: 800px) {
    margin-left: 40px;
    flex-direction: column;
  }
`;

export const RemoveReservationButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin: 30px 20px 20px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const LeaveReservationButton = styled(RemoveReservationButton)``;

export const TableHead = styled.div`
  display: flex;
  align-items: center;
`;

export const TableHeadInput = styled.input`
  padding: 5px;
  margin-left: 10px;
  text-align: center;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) =>
    props.color === "color" ? colors.sixthColorType : colors.defaultColorType};
`;

export const ReservationButtonAgree = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  margin: 15px 10px 20px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ReservationButtonDisagree = styled(ReservationButtonAgree)``;

export const RenderTableHeader = styled.h5`
  font-weight: 100;
  font-style: italic;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;

export const DotsIcon = styled.div`
  margin-right: 10px;
  margin-left: 4px;
  font-size: 18px;
`;

export const ChairSection = styled.div`
  display: flex;
  justify-content: start;
  margin: 10px;
`;

export const ChairHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TableChairIcon = styled.div`
  height: 30px;
  width: 30px;
  padding: 5px;
  margin: 5px 10px 5px 10px;
`;

export const DeletePerson = styled(RemoveReservationButton)`
  &:hover {
    background-color: ${(props) =>
      props.color === "color"
        ? colors.seventhColorType
        : colors.defaultColorType};
    cursor: pointer;
    transition: all ease-in-out;
    transition-duration: 400ms;
  }
`;

export const CancelSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;

  @media (max-width: 800px) {
    margin-top: 10px;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CancelSectionQuestion = styled.p`
  font-style: italic;
  font-weight: 100;
`;
