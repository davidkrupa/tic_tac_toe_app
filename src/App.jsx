import { useState } from "react";
import Row from "./Row";

const ROW_NUM = 3;
const COL_NUM = 3;
const PLAYER_1 = "X";
const PLAYER_2 = "O";

function App() {
  const [board, setBoard] = useState(getEmptyBoard(ROW_NUM, COL_NUM));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [isGameWon, setIsGameWon] = useState(false);

  console.log(board);

  const handleClick = (colId, rowId) => {
    if (isGameWon) return;

    const updatedBoard = board.map((row, index) => {
      if (rowId !== index) return row;
      else
        return row.map((tile, index) => {
          if (colId !== index) return tile;
          else return currentPlayer;
        });
    });

    if (checkIsWinner(colId, rowId, updatedBoard)) {
      setIsGameWon(true);
    }
    setBoard(updatedBoard);
    setCurrentPlayer((prev) => (prev === PLAYER_1 ? PLAYER_2 : PLAYER_1));
  };

  const checkIsWinner = (colId, rowId, updatedBoard) => {
    const isWinnerRow = updatedBoard[rowId].every(
      (el) => el === updatedBoard[rowId][colId]
    );
    const isWinnerCol = updatedBoard.every(
      (el) => el[colId] === updatedBoard[rowId][colId]
    );
    return isWinnerRow || isWinnerCol;
  };

  const handleRestart = () => {
    setBoard(getEmptyBoard(ROW_NUM, COL_NUM));
    setCurrentPlayer(PLAYER_1);
    setIsGameWon(false);
  };

  return (
    <div className="app-wrapper">
      <h1>{!isGameWon ? "Tic Tac Toe" : "You Won!"}</h1>
      {board.map((item, index) => (
        <Row
          key={index}
          rowId={index}
          elements={item}
          handleClick={handleClick}
        />
      ))}
      <button onClick={() => handleRestart()}>New Game</button>
    </div>
  );
}

const getEmptyBoard = (rows, cols) => {
  return Array(rows).fill(Array(cols).fill(null));
};

export default App;
