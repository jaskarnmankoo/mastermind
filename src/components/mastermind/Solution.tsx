import * as React from 'react';

interface Props {
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  solution: React.MutableRefObject<string[]>;
}

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
            className={`game-piece ${piece}`}
            key={`solution-${piece}-${index}`}
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
