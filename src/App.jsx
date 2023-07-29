import { useState } from "react";
import Row from "./Row";

const ROW_NUM = 3;
const COL_NUM = 3;
const PLAYER_1 = "X";
const PLAYER_2 = "O";

function App() {
  const [board, setBoard] = useState(
    Array(ROW_NUM).fill(Array(COL_NUM).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  console.log(board);
  console.log(board);
  console.log(board);

  const handleClick = (colId, rowId) => {
    const updatedBoard = board.map((row, index) => {
      if (rowId !== index) return row;
      else
        return row.map((tile, index) => {
          if (colId !== index) return tile;
          else return currentPlayer;
        });
    });
    setBoard(updatedBoard);
    setCurrentPlayer((prev) => (prev === PLAYER_1 ? PLAYER_2 : PLAYER_1));
  };

  return (
    <div className="app-wrapper">
      <h1>Tic Tac Toe</h1>
      {board.map((item, index) => (
        <Row
          key={index}
          rowId={index}
          elements={item}
          handleClick={handleClick}
        />
      ))}
      <button>New Game</button>
    </div>
  );
}

export default App;
