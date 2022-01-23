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
      <div className="flex justify-center items-center">
        {solution.current.map((piece, index) => (
          <div
            className={`game-piece ${piece ? piece : ''}`}
            key={`solution-${piece ? piece : ''}-${index ? index : ''}`}
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
