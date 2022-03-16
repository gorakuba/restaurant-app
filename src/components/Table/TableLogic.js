import { useState } from "react";

const TableLogic = () => {
  const [table, setTable] = useState(false);
  const [title, setTitle] = useState("Reserve");
  const [place, setPlace] = useState("");

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

  return { reserve, table, title, setPlaces, place };
};

export default TableLogic;
