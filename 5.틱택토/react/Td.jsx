import React, { useCallback } from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td = ({ dispatch, rowIndex, cellIndex, tableData }) => {
  const onClickTd = useCallback(() => {
    if (tableData[rowIndex][cellIndex]) {
      return;
    }

    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [tableData[rowIndex][cellIndex]]);

  return <td onClick={onClickTd}>{tableData[rowIndex][cellIndex]}</td>;
};

export default Td;
