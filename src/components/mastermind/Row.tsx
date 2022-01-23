import * as React from 'react';

import { determineHintColor } from '../../utils';

interface Props {
  activePiece: string;
  activeRow: number;
  checkSolution: () => void;
  currentRow: string[];
  previousHints: React.MutableRefObject<number[][]>;
  previousRows: React.MutableRefObject<string[][]>;
  row: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<string[]>>;
}

/** Renders a Row in Mastermind */
export default function Row({
  activePiece,
  activeRow,
  checkSolution,
  currentRow,
  previousHints,
  previousRows,
  row,
  setCurrentRow
}: Props): JSX.Element {
  let previousButtons: string[] = [];
  let hints: number[] = [];

  const isActive = activeRow === row;

  const setPiece = (index: number) => {
    const currentRowCopy = [...currentRow];
    currentRowCopy[index] = activePiece;
    setCurrentRow(currentRowCopy);
  };

  if (previousRows.current[row]) previousButtons = previousRows.current[row];
  if (previousHints.current[row]) hints = previousHints.current[row];

  return (
    <div className="flex flex-col gap-4">
      {isActive && (
        <>
          <h1>Attempt {activeRow + 1}</h1>
          <button
            type="button"
            className="game-mode w-48 mx-auto"
            onClick={checkSolution}
            disabled={
              currentRow[0] === '' ||
              currentRow[1] === '' ||
              currentRow[2] === '' ||
              currentRow[3] === ''
            }
          >
            Check
          </button>
        </>
      )}
      {hints.length !== 0 && (
        <div className="flex justify-center items-center w-full mx-auto">
          <p>Hints</p>&nbsp;
          {hints.map((hint, index) => (
            <span
              className={`w-1 h-1 p-1 mx-1 border-2 border-black rounded-full dark:border-white ${determineHintColor(
                hint
              )}`}
              key={`hint-${row}-${index}`}
            />
          ))}
        </div>
      )}
      <div
        className={`flex justify-center items-center w-full my-2 ${
          isActive
            ? 'border-solid border-black rounded-lg border-2 dark:border-white'
            : ''
        } ${previousButtons.length !== 0 ? 'p-2 my-0' : 'p-8 my-2'}`}
      >
        {previousButtons.length !== 0 ? (
          <>
            {previousButtons.map((button, index) => (
              <div
                className={`game-piece ${button}`}
                key={`game-piece-${button}-${row}-${index}`}
              />
            ))}
          </>
        ) : (
          <>
            {[0, 1, 2, 3].map((button, index) => (
              <React.Fragment key={`button-${index}`}>
                <button
                  type="button"
                  aria-label={`peg ${isActive ? currentRow[button] : ''}`}
                  className={`game-piece ${isActive ? currentRow[button] : ''}`}
                  disabled={!isActive || activePiece === currentRow[button]}
                  onClick={() => setPiece(button)}
                />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
