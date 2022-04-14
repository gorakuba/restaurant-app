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
            <TableRestaurantIcon /> {name}
          </TableIcon>
        </TableHeaderTitle>

        {!renderTables ? (
          <ReservationButton onClick={reserve}>{title}</ReservationButton>
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
                <div className='table__head'>
                  <p>Ile miejsc potrzebujesz:</p>
                  <input
                    type='number'
                    className='table__number'
                    required
                    onChange={setPlaces}
                  />
                </div>
                {place.length >= 1 ? (
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
                            <button
                              className='table__controls'
                              onClick={yesClick}
                            >
                              Tak
                            </button>
                            <button
                              className='table__controls'
                              onClick={noClick}
                            >
                              Nie
                            </button>
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
                <h5>
                  <ArrowRightAltIcon className='table__dotsIcon' />
                  {parseInt(place) === 1
                    ? `Stolik zarezerwowany dla ${place} osoby 🤭`
                    : `Stolik zarezerwowany dla ${place} osób 🤭`}
                </h5>

                <ChairSection>
                  {place !== 0 ? (
                    <ChairHeader color={color}>
                      {place} <EventSeatIcon className='table__chairIcon' />
                      <button
                        className='table__deletePersonButton'
                        onClick={removeChair}
                      >
                        Delete person
                      </button>
                    </ChairHeader>
                  ) : null}

                  {place === 0 ? (
                    <>
                      <CancelSection>
                        <p>Czy na pewno chesz anulować rezerwację?</p>

                        <Buttons>
                          <button
                            className='table__controlsCancel'
                            onClick={yesCancel}
                          >
                            Tak
                          </button>
                          <button
                            className='table__controlsCancel'
                            onClick={noCancel}
                          >
                            Nie, dodaj osoby
                          </button>
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
