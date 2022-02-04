import * as React from 'react';

interface Props {
  activePiece: string;
  currentRow: string[];
  isActive: boolean;
  piece: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<string[]>>;
}

/** Renders a Piece in a Row */
export default function Piece({
  activePiece,
  currentRow,
  isActive,
  piece,
  setCurrentRow
}: Props): JSX.Element {
  const onClick = React.useCallback(() => {
    const currentRowCopy = [...currentRow];
    currentRowCopy[piece] = activePiece;
    setCurrentRow(currentRowCopy);
  }, [activePiece, currentRow, piece, setCurrentRow]);

  return (
    <button
      type="button"
      aria-label={`peg ${isActive ? currentRow[piece] : ''}`}
      className={`game-piece ${isActive ? currentRow[piece] : ''}`}
      disabled={!isActive || activePiece === currentRow[piece]}
      onClick={onClick}
    />
  );
}
