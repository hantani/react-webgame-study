import React from "react";
import Td from "./Td";

const Tr = ({ rowData, dispatch, rowIndex, tableData }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((v, i) => (
          <Td
            key={i}
            dispatch={dispatch}
            rowIndex={rowIndex}
            cellIndex={i}
            tableData={tableData}
          />
        ))}
    </tr>
  );
};

export default Tr;
