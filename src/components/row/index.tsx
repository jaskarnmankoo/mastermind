import * as React from 'react';

import Piece from './Piece';

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

  if (previousRows.current[row]) previousButtons = previousRows.current[row];
  if (previousHints.current[row]) hints = previousHints.current[row];

  return (
    <div className="flex flex-col gap-4">
      {isActive && (
        <>
          <h1>Attempt {activeRow + 1}</h1>
          <button
            type="button"
            className="game-mode mx-auto w-48"
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
        <div className="mx-auto flex w-full items-center justify-center">
          <p>Hints</p>&nbsp;
          {hints.map((hint, index) => (
            <span
              className={`mx-1 h-1 w-1 rounded-full border-2 border-black p-1 dark:border-white ${determineHintColor(
                hint
              )}`}
              key={`hint-${row}-${index}`}
            />
          ))}
        </div>
      )}
      <div
        className={`my-2 flex w-full items-center justify-center ${
          isActive
            ? 'rounded-lg border-2 border-solid border-black dark:border-white'
            : ''
        } ${previousButtons.length !== 0 ? 'my-0 p-2' : 'my-2 p-8'}`}
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
                <Piece
                  activePiece={activePiece}
                  currentRow={currentRow}
                  isActive={isActive}
                  piece={button}
                  setCurrentRow={setCurrentRow}
                />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
