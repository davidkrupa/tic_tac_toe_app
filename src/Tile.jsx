import React from "react";

const Tile = ({ colId, rowId, element, handleClick }) => {
  return (
    <div className="tile" onClick={() => handleClick(colId, rowId)}>
      {element}
    </div>
  );
};

export default Tile;
