import { useState } from "react";

const TableLogic = () => {
  const [load, setLoad] = useState(false);
  const [table, setTable] = useState(false);
  const [title, setTitle] = useState("Reserve");
  const [place, setPlace] = useState("");
  const [renderTables, setRenderTables] = useState(false);
  const [cancelButton, setCancelButton] = useState(false);
  const [reservationDelete, setReservationDelete] = useState(false);
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [chairHolder, setChairHolder] = useState(false);
  const [dateHolder, setDateHolder] = useState(false);
  const [hourHolder, setHourHolder] = useState(false);

  const reserve = () => {
    setTable((prev) => !prev);

    if (!table) {
      setTitle("Cancel");
      setLoad(true);
    } else {
      setTitle("Reserve");
      setLoad(false);
    }
  };

  const setHours = (e) => {
    setHour(e.target.value);
    setHourHolder(true);
  };

  const setDates = (e) => {
    setDate(e.target.value);
    setDateHolder(true);
  };

  const nextStep = () => {
    setChairHolder(true);
    setHourHolder(false);
    setDateHolder(false);
  };

  const setPlaces = (e) => {
    setPlace(e.target.value);
  };

  const yesClick = () => {
    setTable(false);
    setRenderTables((prev) => !prev);
    setTitle("Reserve");
    setLoad(true);
    setCancelButton(true);
  };

  const noClick = (e) => {
    setTable(false);
    setPlace((e.target.value = ""));
    setTitle("Reserve");
    setLoad(false);
  };

  const removeChair = () => {
    setPlace((prev) => prev - 1);
  };

  const yesCancel = () => {
    setTable(false);
    setRenderTables((prev) => !prev);
    setTitle("Reserve");
    setLoad(false);
    setCancelButton(false);
  };

  const noCancel = () => {
    setTable(true);
    setTitle("Cancel");
    setRenderTables(false);
    setCancelButton(false);
  };

  const removeReservationQuestion = () => {
    setReservationDelete(true);
  };

  const removeReservation = (e) => {
    setTable(false);
    setTitle("Reserve");
    setPlace((e.target.value = ""));
    setRenderTables(false);
    setLoad(false);
    setCancelButton(false);
    setReservationDelete(false);
  };

  const leaveReservation = () => {
    setReservationDelete(false);
  };

  return {
    reserve,
    table,
    title,
    setPlaces,
    place,
    yesClick,
    noClick,
    renderTables,
    setRenderTables,
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
    hourHolder,
    dateHolder,
    hour,
    date,
    nextStep,
  };
};

export default TableLogic;
