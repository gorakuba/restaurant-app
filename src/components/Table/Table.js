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
} from "./Table.styled";
import TableLogic from "./TableLogic";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
  } = TableLogic();

  return (
    <TableStyle>
      <TableHeader>
        <h4>
          <TableRestaurantIcon className='tableIcon' /> {name}
        </h4>

        {!renderTables ? <button onClick={reserve}>{title}</button> : null}

        {cancelButton ? (
          <button className='removeReservation' onClick={removeReservation}>
            Cancel reservation
          </button>
        ) : null}
      </TableHeader>

      <TableBody>
        {!load ? (
          <Header>
            <h1>UNRESERVED</h1>
          </Header>
        ) : null}

        {table ? (
          <>
            <div className='head'>
              <p>Ile miejsc potrzebujesz:</p>
              <input
                type='number'
                className='number'
                required
                onChange={setPlaces}
              />
            </div>
            {place.length >= 1 ? (
              <p>
                {parseInt(place) === 1
                  ? `Czy jesteś pewien, że chcesz zarezerwowć stolik dla ${place} osoby?`
                  : `Czy jesteś pewien, że chcesz zarezerwowć stolik dla ${place} osób?`}
                <br />
                <button className='controls' onClick={yesClick}>
                  Tak
                </button>
                <button className='controls' onClick={noClick}>
                  Nie
                </button>
              </p>
            ) : null}
          </>
        ) : null}

        {renderTables ? (
          <>
            <h5>
              <ArrowRightAltIcon className='dotsIcon' />
              {parseInt(place) === 1
                ? `Stolik zarezerwowany dla ${place} osoby 🤭`
                : `Stolik zarezerwowany dla ${place} osób 🤭`}
            </h5>

            <ChairSection>
              {place !== 0 ? (
                <ChairHeader>
                  {place} <EventSeatIcon className='chairIcon' />
                  <button className='deletePersonButton' onClick={removeChair}>
                    Delete person
                  </button>
                </ChairHeader>
              ) : null}

              {place === 0 ? (
                <>
                  <CancelSection>
                    <p>Czy na pewno chesz anulować rezerwację?</p>

                    <Buttons>
                      <button className='controlsCancel' onClick={yesCancel}>
                        Tak
                      </button>
                      <button className='controlsCancel' onClick={noCancel}>
                        Nie, dodaj osoby
                      </button>
                    </Buttons>
                  </CancelSection>
                </>
              ) : null}
            </ChairSection>
          </>
        ) : null}
      </TableBody>
    </TableStyle>
  );
};

export default Table;
