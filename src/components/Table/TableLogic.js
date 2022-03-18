import { useState } from "react";

const TableLogic = () => {
  const [load, setLoad] = useState(false);
  const [table, setTable] = useState(false);
  const [title, setTitle] = useState("Reserve");
  const [place, setPlace] = useState("");
  const [renderTables, setRenderTables] = useState(false);
  const [cancelButton, setCancelButton] = useState(false);

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
  };

  const removeReservation = (e) => {
    setTable(false);
    setTitle("Reserve");
    setPlace((e.target.value = ""));
    setRenderTables(false);
    setLoad(false);
    setCancelButton(false);
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
  };
};

export default TableLogic;
