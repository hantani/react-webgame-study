import React, { useReducer, useEffect } from "react";
import Table from "./Table";

const initialState = {
  turn: "O",
  winner: "",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

export const CLICK_CELL = "CLICK_CELL";
export const SET_WINNER = "SET_WINNER";
export const RESET_GAME = "RESET_GAME";
export const CHANGE_TURN = "CHANGE_TURN";

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;

      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case SET_WINNER: {
      return {
        ...state,
        winner: action.turn,
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }
    default: {
      return state;
    }
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { turn, winner, tableData, recentCell } = state;

  useEffect(() => {
    const [row, cell] = recentCell;

    if (row < 0) {
      return;
    }

    let win = false;

    if (
      (tableData[row][0] === turn) &
      (tableData[row][1] === turn) &
      (tableData[row][2] === turn)
    ) {
      win = true;
    } else if (
      (tableData[0][cell] === turn) &
      (tableData[1][cell] === turn) &
      (tableData[2][cell] === turn)
    ) {
      win = true;
    } else if (
      (tableData[0][0] === turn) &
      (tableData[1][1] === turn) &
      (tableData[2][2] === turn)
    ) {
      win = true;
    } else if (
      (tableData[0][2] === turn) &
      (tableData[1][1] === turn) &
      (tableData[2][0] === turn)
    ) {
      win = true;
    }

    if (win) {
      dispatch({ type: SET_WINNER, turn: turn });
      dispatch({ type: RESET_GAME });
    } else {
      let all = true;
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });

      if (all) {
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table tableData={tableData} dispatch={dispatch} />
      {winner && <div>{winner}의 승리</div>}
    </>
  );
};

export default TicTacToe;
