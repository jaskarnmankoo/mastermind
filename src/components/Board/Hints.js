import * as React from 'react';

import CheckBox from './Checkbox';

export default function Hints(props) {
  let allHints = [];
  let hintClass = '';
  const rowId = +props.rowId.substr(4);
  const hintArr = props.state.hints;
  const prevHints = props.state.previousHints;

  for (let i = 0; i < hintArr.length; i++) {
    if (rowId === props.state.activeRow) {
      hintClass =
        hintArr[i] === 2 ? 'exact' : hintArr[i] === 1 ? 'partial' : '';
    } else {
      for (let j = 0; j < prevHints.length; j++) {
        if (rowId === j) {
          hintClass =
            prevHints[j][i] === 2
              ? 'exact'
              : prevHints[j][i] === 1
              ? 'partial'
              : '';
        }
      }
    }

    allHints.push(
      <CheckBox
        hintClass={hintClass}
        key={'h_' + rowId + i}
        id={'h_' + rowId + i}
      />
    );
  }
  return <div className="hints">{allHints}</div>;
}
