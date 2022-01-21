import * as React from 'react';

export default function Colors(props) {
  const allColors = props.list.map((color) => {
    const active = color === props.activeColor ? 'active' : '';

    return (
      <button
        className={`color-holder ${color} ${active}`}
        aria-label={`color-holder ${color}`}
        key={color}
        onClick={() => {
          props.action(color);
        }}
      />
    );
  });

  return <div className="colors">{allColors}</div>;
}
