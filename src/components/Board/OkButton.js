import * as React from 'react';

export default function OkButton(props) {
  const row = +props.rowId.substr(4);
  let disabled = 'disabled';
  const doNothing = () => false;

  if (props.state.activeRow === row) {
    disabled = props.state.canCheck ? '' : 'disabled';
  }
  const checkAction = disabled === 'disabled' ? doNothing : props.checkAction;

  return (
    <button
      className={`ok-button ${disabled}`}
      aria-label="ok-button"
      onClick={checkAction}
    >
      check
    </button>
  );
}
