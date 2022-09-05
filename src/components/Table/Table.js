import React from 'react';

import TableLogic from './TableLogic';
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
  TableDate,
  TableHour,
} from './Table.styled';

import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Button } from '@mui/material';

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
    chairHolder,
    setHours,
    setDates,
    hour,
    date,
    hourHolder,
    dateHolder,
    nextStep,
  } = TableLogic();

  return (
    <TableStyle>
      <TableHeader>
        <TableHeaderTitle>
          <TableIcon>
            <TableRestaurantIcon />
          </TableIcon>
          {name}
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
                <TableHour>
                  <p>Godzina rezerwacji:</p>

                  <TableHeadInput type='time' onChange={setHours} />
                </TableHour>

                <TableDate>
                  <p>Data rezerwacji:</p>

                  <TableHeadInput type='date' onChange={setDates} />
                </TableDate>

                <>
                  <TableHead>
                    <p>Ile miejsc potrzebujesz:</p>

                    <TableHeadInput type='number' onChange={setPlaces} />
                  </TableHead>

                  {hourHolder && dateHolder && place.length >= 1 ? (
                    <Button style={{ marginLeft: '0' }} onClick={nextStep}>
                      Next step
                    </Button>
                  ) : null}

                  {place.length >= 1 && chairHolder ? (
                    <>
                      {parseInt(place) > 10 ? (
                        <p
                          style={{
                            marginTop: '15px',
                            marginBottom: '15px',
                            color: 'red',
                          }}
                        >
                          Stolik można zarezerwować dla maksymalnie 10 osób!
                        </p>
                      ) : (
                        <>
                          {parseInt(place) < 0 || parseInt(place) === 0 ? (
                            <p
                              style={{
                                marginTop: '15px',
                                marginBottom: '15px',
                                color: 'red',
                              }}
                            >
                              Ilość miejsc nie może być mniejsza ani równa 0!
                            </p>
                          ) : (
                            <>
                              {parseInt(place) === 1 ? (
                                <p style={{ marginTop: '25px' }}>
                                  Czy jesteś pewien, że chcesz zarezerwowć
                                  stolik dla {place} osoby?
                                </p>
                              ) : (
                                <p style={{ marginTop: '25px' }}>
                                  Czy jesteś pewien, że chcesz zarezerwowć
                                  stolik dla {place} osób?
                                </p>
                              )}
                              <br />
                              <ReservationButtonAgree onClick={yesClick}>
                                Tak
                              </ReservationButtonAgree>
                              <ReservationButtonDisagree onClick={noClick}>
                                Nie
                              </ReservationButtonDisagree>
                            </>
                          )}
                        </>
                      )}
                    </>
                  ) : null}
                </>
              </>
            ) : null}

            {renderTables ? (
              <>
                <RenderTableHeader>
                  <DotsIcon>
                    <FiberManualRecordIcon style={{ fontSize: '10px' }} />
                  </DotsIcon>

                  {parseInt(place) === 1
                    ? `Stolik zarezerwowany dla ${place} osoby 🤭`
                    : `Stolik zarezerwowany dla ${place} osób 🤭`}
                </RenderTableHeader>

                <RenderTableHeader>
                  <DotsIcon>
                    <FiberManualRecordIcon style={{ fontSize: '10px' }} />
                  </DotsIcon>
                  Stolik zarezerwowany na dzień: {date}
                </RenderTableHeader>

                <RenderTableHeader>
                  <DotsIcon>
                    <FiberManualRecordIcon style={{ fontSize: '10px' }} />
                  </DotsIcon>
                  Stolik zarezerwowany na godzinę: {hour}
                </RenderTableHeader>

                <ChairSection>
                  {place !== 0 ? (
                    <ChairHeader>
                      {place}
                      <TableChairIcon>
                        <EventSeatIcon />
                      </TableChairIcon>
                      <DeletePerson onClick={removeChair}>
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
