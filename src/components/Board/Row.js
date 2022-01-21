import * as React from 'react';

import Circles from './Circles';
import Hints from './Hints';
import OkButton from './OkButton';

export default function Row(props) {
  let active = '';
  if (+props.id.substr(4) === props.state.activeRow) {
    active = 'active';
  }

  return (
    <div className={'row ' + active} id={props.id}>
      <Circles
        rowId={props.id}
        state={props.state}
        pegAction={props.pegAction}
      />
      <OkButton
        state={props.state}
        rowId={props.id}
        checkAction={props.checkAction}
      />
      <Hints state={props.state} rowId={props.id} />
    </div>
  );
}
