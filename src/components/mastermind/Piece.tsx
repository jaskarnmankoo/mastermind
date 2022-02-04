import * as React from 'react';

interface Props {
  activePiece: string;
  piece: string;
  setActivePiece: (value: React.SetStateAction<string>) => void;
}

/** Renders a Game Piece to select */
export default function Piece({
  activePiece,
  piece,
  setActivePiece
}: Props): JSX.Element {
  const onClick = React.useCallback(
    () => setActivePiece(piece),
    [piece, setActivePiece]
  );

  return (
    <button
      type="button"
      aria-label={piece}
      className={`game-piece ${String(piece)} ${
        piece === activePiece ? 'rounded-xl border-4 border-green-600' : ''
      }`}
      onClick={onClick}
    />
  );
}
