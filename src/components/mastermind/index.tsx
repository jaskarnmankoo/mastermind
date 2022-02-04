import * as React from 'react';

import Piece from './Piece';
import Row from '../row';
import Solution from '../solution';

interface Props {
  pieces: React.MutableRefObject<string[]>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  solution: React.MutableRefObject<string[]>;
}

/** Renders the Mastermind game */
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

    currentRowCopy.forEach((_row, rowIndex) => {
      solutionCopy.forEach((_solution, solutionindex) => {
        if (currentRowCopy[rowIndex] === solutionCopy[solutionindex]) {
          hints.current[rowIndex] = 1;
          delete currentRowCopy[rowIndex];
          delete solutionCopy[solutionindex];
        }
      });
    });

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

  return (
    <>
      <div className="flex items-center justify-center">
        {pieces.current.map((piece) => (
          <React.Fragment key={piece}>
            <Piece
              activePiece={activePiece}
              piece={piece}
              setActivePiece={setActivePiece}
            />
          </React.Fragment>
        ))}
      </div>
      {!won ? (
        activeRow !== 10 ? (
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
        )
      ) : (
        <>
          <p>You won! The solution was:</p>
          <Solution setDifficulty={setDifficulty} solution={solution} />
        </>
      )}
    </>
  );
}
