import { useState } from "react";

const TableLogic = () => {
  const [table, setTable] = useState(false);
  const [title, setTitle] = useState("Reserve");
  const [place, setPlace] = useState("");
  const [renderTables, setRenderTables] = useState(false);

  const reserve = () => {
    setTable((prev) => !prev);

    if (!table) {
      setTitle("Cancel");
    } else {
      setTitle("Reserve");
    }
  };

  const setPlaces = (e) => {
    setPlace(e.target.value);
  };

  const yesClick = () => {
    setTable(false);
    setRenderTables((prev) => !prev);
    setTitle("Reserve");
  };

  const noClick = (e) => {
    setTable(false);
    setPlace((e.target.value = ""));
    setTitle("Reserve");
  };

  const removeChair = () => {
    setPlace((prev) => prev - 1);
  };

  const noCancel = () => {
    setTable(true);
    setTitle("Cancel");
    setRenderTables(false);
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
  };
};

export default TableLogic;
