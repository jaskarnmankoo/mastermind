import * as React from 'react';

interface Props {
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  solution: React.MutableRefObject<string[]>;
}

export default function Solution({
  setDifficulty,
  solution
}: Props): JSX.Element {
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
        className="game-mode mx-auto w-48"
        onClick={() => setDifficulty('')}
      >
        Play again?
      </button>
    </>
  );
}
