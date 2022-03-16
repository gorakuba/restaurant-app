import React from "react";
import { TableStyle, TableHeader, TableBody } from "./Table.styled";
import TableLogic from "./TableLogic";

const Table = ({ name }) => {
  const { reserve, table, title, setPlaces, place } = TableLogic();

  return (
    <TableStyle>
      <TableHeader>
        <h4>{name}</h4>

        <button onClick={reserve}>{title}</button>
      </TableHeader>

      <TableBody>
        {table ? (
          <>
            Ile miejsc potrzebujesz:
            <input
              type='text'
              className='number'
              required
              onChange={setPlaces}
            />
            {place.length >= 1 ? (
              <p>
                Czy jesteś pewien, że chcesz zarezerwowć stolik na {place} osób?
                <br />
                <button className='controls'>Tak</button>
                <button className='controls'>Nie</button>
              </p>
            ) : null}
          </>
        ) : null}
      </TableBody>
    </TableStyle>
  );
};

export default Table;
