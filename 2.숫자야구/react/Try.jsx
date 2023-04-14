import React, { memo } from "react";

const Try = memo(({ tryInfo }) => {
  return (
    <div>
      <span>{tryInfo.try}</span>
      <span>{tryInfo.result}</span>
    </div>
  );
});

export default Try;
