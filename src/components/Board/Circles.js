import * as React from 'react';

import Peg from './Peg';

export default function Circles(props) {
  const rowId = props.rowId.substr(4);
  let Pegs = [];
  for (let i = 0; i < 4; i++) {
    Pegs.push(
      <Peg
        state={props.state}
        pegAction={props.pegAction}
        key={'p' + rowId + '-' + i}
        pegId={'p' + rowId + '-' + i}
      />
    );
  }

  return <div className="circles"> {Pegs} </div>;
}
