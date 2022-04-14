import React from "react";
import {
  TableStyle,
  TableHeader,
  TableBody,
  ChairSection,
  Buttons,
  CancelSection,
  Header,
  ChairHeader,
  CancelReservation,
  TableHeaderTitle,
  TableIcon,
  ReservationButton,
  CancelReservationButton,
  CancelQuestion,
  RemoveReservationButton,
  LeaveReservationButton,
  TableHead,
  TableHeadInput,
  ReservationButtonAgree,
  ReservationButtonDisagree,
  DotsIcon,
  RenderTableHeader,
  TableChairIcon,
  DeletePerson,
  CancelSectionQuestion,
} from "./Table.styled";
import TableLogic from "./TableLogic";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { color } from "../../utilities/colors";

const Table = ({ name }) => {
  const {
    reserve,
    table,
    title,
    setPlaces,
    place,
    yesClick,
    noClick,
    renderTables,
    removeChair,
    noCancel,
    load,
    yesCancel,
    cancelButton,
    removeReservation,
    removeReservationQuestion,
    reservationDelete,
    leaveReservation,
  } = TableLogic();

  return (
    <TableStyle color={color}>
      <TableHeader>
        <TableHeaderTitle>
          <TableIcon>
            <TableRestaurantIcon />
          </TableIcon>
          {name}
        </TableHeaderTitle>

        {!renderTables ? (
          <ReservationButton onClick={reserve} color={color}>
            {title}
          </ReservationButton>
        ) : null}

        {cancelButton ? (
          <CancelReservationButton onClick={removeReservationQuestion}>
            Cancel reservation
          </CancelReservationButton>
        ) : null}
      </TableHeader>

      <TableBody>
        {!load ? <Header>UNRESERVED</Header> : null}

        {reservationDelete ? (
          <CancelReservation>
            <CancelQuestion>
              Czy na pewno chesz anulować rezerwację?
            </CancelQuestion>

            <Buttons>
              <RemoveReservationButton onClick={removeReservation}>
                Tak
              </RemoveReservationButton>
              <LeaveReservationButton onClick={leaveReservation}>
                Nie
              </LeaveReservationButton>
            </Buttons>
          </CancelReservation>
        ) : (
          <>
            {table ? (
              <>
                <TableHead>
                  <p>Ile miejsc potrzebujesz:</p>
                  <TableHeadInput
                    type='number'
                    onChange={setPlaces}
                    color={color}
                  />
                </TableHead>

                {parseInt(place) >= 1 ? (
                  <>
                    {parseInt(place) > 10 ? (
                      <p>Stolik można zarezerwować dla maksymalnie 10 osób!</p>
                    ) : (
                      <p>
                        {parseInt(place) < 0 || parseInt(place) === 0 ? (
                          "Ilość miejsc nie może być mniejsza ani równa 0!"
                        ) : (
                          <>
                            {parseInt(place) === 1
                              ? `Czy jesteś pewien, że chcesz zarezerwowć stolik dla ${place} osoby?`
                              : `Czy jesteś pewien, że chcesz zarezerwowć stolik dla ${place} osób?`}
                            <br />
                            <ReservationButtonAgree onClick={yesClick}>
                              Tak
                            </ReservationButtonAgree>
                            <ReservationButtonDisagree onClick={noClick}>
                              Nie
                            </ReservationButtonDisagree>
                          </>
                        )}
                      </p>
                    )}
                  </>
                ) : null}
              </>
            ) : null}

            {renderTables ? (
              <>
                <RenderTableHeader>
                  <DotsIcon>
                    <ArrowRightAltIcon />
                  </DotsIcon>

                  {parseInt(place) === 1
                    ? `Stolik zarezerwowany dla ${place} osoby 🤭`
                    : `Stolik zarezerwowany dla ${place} osób 🤭`}
                </RenderTableHeader>

                <ChairSection>
                  {place !== 0 ? (
                    <ChairHeader color={color}>
                      {place}
                      <TableChairIcon>
                        <EventSeatIcon />
                      </TableChairIcon>
                      <DeletePerson color={color} onClick={removeChair}>
                        Delete person
                      </DeletePerson>
                    </ChairHeader>
                  ) : null}

                  {place === 0 ? (
                    <>
                      <CancelSection>
                        <CancelSectionQuestion>
                          Czy na pewno chesz anulować rezerwację?
                        </CancelSectionQuestion>

                        <Buttons>
                          <RemoveReservationButton onClick={yesCancel}>
                            Tak
                          </RemoveReservationButton>
                          <LeaveReservationButton onClick={noCancel}>
                            Nie, dodaj osoby
                          </LeaveReservationButton>
                        </Buttons>
                      </CancelSection>
                    </>
                  ) : null}
                </ChairSection>
              </>
            ) : null}
          </>
        )}
      </TableBody>
    </TableStyle>
  );
};

export default Table;
