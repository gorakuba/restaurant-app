import React from "react";
import {
  TableStyle,
  TableHeader,
  TableBody,
  ChairSection,
  Buttons,
  CancelSection,
  Header,
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
  } = TableLogic();

  return (
    <TableStyle>
      <TableHeader>
        <h4>
          <TableRestaurantIcon className='tableIcon' /> {name}
        </h4>

        {!renderTables ? <button onClick={reserve}>{title}</button> : null}
      </TableHeader>

      <TableBody>
        {!table ? (
          <Header>
            <img
              src='https://restauracjapapu.pl/upload/images/25220826e9086e.jpg'
              alt='restaurant_photo'
            />

            <img
              src='https://restauracjapapu.pl/upload/images/551a4661be0047.jpg'
              alt='restaurant_photo'
            />
          </Header>
        ) : (
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
        )}

        {renderTables ? (
          <>
            <h5>
              <ArrowRightAltIcon className='dotsIcon' />
              {parseInt(place) === 1
                ? `Stolik zarezerwowany dla ${place} osoby 🤭`
                : `Stolik zarezerwowany dla ${place} osób 🤭`}
            </h5>

            <ChairSection>
              {Array(parseInt(place))
                .fill()
                .map((_, id) => (
                  <>
                    <EventSeatIcon
                      key={id}
                      className='chairIcon'
                      onClick={removeChair}
                    />
                  </>
                ))}

              {place === 0 ? (
                <>
                  <CancelSection>
                    <p>Czy na pewno chesz anulować rezerwację?</p>

                    <Buttons>
                      <button className='controlsCancel' onClick={yesClick}>
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
