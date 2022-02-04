import * as React from 'react';

interface Props {
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  solution: React.MutableRefObject<string[]>;
}

/** Renders the Mastermind solution */
export default function Solution({
  setDifficulty,
  solution
}: Props): JSX.Element {
  const resetDifficulty = React.useCallback(
    () => setDifficulty(''),
    [setDifficulty]
  );

  return (
    <>
      <div className="flex items-center justify-center">
        {solution.current.map((piece, index) => (
          <div
            className={`game-piece ${String(piece)}`}
            key={`solution-${String(piece)}-${String(index)}`}
          />
        ))}
      </div>
      <button
        type="button"
        className="game-mode mx-auto w-48"
        onClick={resetDifficulty}
      >
        Play again?
      </button>
    </>
  );
}
