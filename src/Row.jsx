import React from "react";
import Tile from "./Tile";

const Row = ({ elements, rowId, handleClick }) => {
  // console.log(elements);
  return (
    <div className="row">
      {elements.map((item, index) => (
        <Tile
          key={index}
          rowId={rowId}
          colId={index}
          element={item}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Row;
