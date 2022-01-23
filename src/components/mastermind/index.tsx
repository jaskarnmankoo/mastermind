import * as React from 'react';

import Row from './Row';
import Solution from './Solution';

interface Props {
  pieces: React.MutableRefObject<string[]>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  solution: React.MutableRefObject<string[]>;
}

export default function Mastermind({
  pieces,
  setDifficulty,
  solution
}: Props): JSX.Element {
  const [activePiece, setActivePiece] = React.useState('');
  const [activeRow, setActiveRow] = React.useState(0);
  const [currentRow, setCurrentRow] = React.useState(['', '', '', '']);
  const [won, setWon] = React.useState(false);

  const hints = React.useRef<number[]>([0, 0, 0, 0]);
  const previousHints = React.useRef<number[][]>([]);
  const previousRows = React.useRef<string[][]>([]);

  const checkSolution = React.useCallback(() => {
    const currentRowCopy = [...currentRow];
    const solutionCopy = [...solution.current];

    for (let i = 0; i < 4; i++) {
      if (currentRowCopy[i] === solutionCopy[i]) {
        hints.current[i] = 2;
        delete currentRowCopy[i];
        delete solutionCopy[i];
      }
    }

    for (const j in currentRowCopy) {
      for (const k in solutionCopy) {
        if (currentRowCopy[j] === solutionCopy[k]) {
          hints.current[j] = 1;
          delete currentRowCopy[j];
          delete solutionCopy[k];
        }
      }
    }

    hints.current.sort((a, b) => b - a);

    setWon(true);
    for (const l in hints.current) {
      if (hints.current[l] < 2) {
        setWon(false);
        break;
      }
    }

    previousHints.current.push(hints.current);
    previousRows.current.push(currentRow);
    hints.current = [0, 0, 0, 0];
    setCurrentRow(['', '', '', '']);
    setActiveRow(activeRow + 1);
  }, [activeRow, currentRow, solution]);

  console.log(solution.current);

  return (
    <>
      <div className="flex justify-center items-center">
        {pieces.current.map((piece) => (
          <button
            type="button"
            className={`game-piece ${piece} ${
              piece === activePiece
                ? 'border-green-600 rounded-xl border-4'
                : ''
            }`}
            aria-label={piece}
            key={piece}
            onClick={() => setActivePiece(piece)}
          />
        ))}
      </div>
      {!won ? (
        <>
          {activeRow !== 10 ? (
            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, index) => (
                <React.Fragment key={`row-${index}`}>
                  <Row
                    activePiece={activePiece}
                    activeRow={activeRow}
                    checkSolution={checkSolution}
                    currentRow={currentRow}
                    previousHints={previousHints}
                    previousRows={previousRows}
                    row={row}
                    setCurrentRow={setCurrentRow}
                  />
                </React.Fragment>
              ))}
            </div>
          ) : (
            <>
              <p>You lost! The solution was:</p>
              <Solution setDifficulty={setDifficulty} solution={solution} />
            </>
          )}
        </>
      ) : (
        <>
          <p>You won! The solution was:</p>
          <Solution setDifficulty={setDifficulty} solution={solution} />
        </>
      )}
    </>
  );
}
