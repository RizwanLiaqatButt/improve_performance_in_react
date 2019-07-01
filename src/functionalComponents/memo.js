import React from "react";

let Memo = props => {
  console.log("redering memo", props);

  return (
    <div>
      <p>MEMO INC: {props.inc}</p>
      <p>MEMO DEC: {props.dec}</p>
    </div>
  );
};

Memo = React.memo(Memo);

export default Memo;
