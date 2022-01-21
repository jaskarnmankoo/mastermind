import * as React from 'react';

export default function Peg(props) {
  const pegId = +props.pegId.substr(props.pegId.indexOf('-') + 1);
  const rowId = +props.pegId.substr(1, props.pegId.indexOf('-') - 1);
  let clase = '';
  if (props.state.activeRow === rowId) {
    clase = props.state.currentRow[pegId];
  } else {
    for (let i in props.state.previousRows) {
      if (+i === +rowId) {
        clase = props.state.previousRows[rowId][pegId];
      }
    }
  }

  return (
    <button
      id={props.pegId}
      className={`peg ${clase}`}
      aria-label={`peg ${clase}`}
      onClick={() => props.pegAction(props.state.activeColor, props.pegId)}
    />
  );
}
