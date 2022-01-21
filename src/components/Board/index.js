import * as React from 'react';

import Row from './Row';

export default function Board(props) {
  let rows = [];
  for (let i = 0; i < props.state.totalRows; i++) {
    rows.push(
      <Row
        key={'row_' + i}
        id={'row_' + i}
        state={props.state}
        pegAction={props.pegAction}
        checkAction={props.checkAction}
      />
    );
  }
  return <div className="board">{rows}</div>;
}
