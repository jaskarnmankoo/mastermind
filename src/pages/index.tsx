import * as React from 'react';

import Mastermind from '../components/mastermind';
import SearchEngineOptimization from '../components/common/SearchEngineOptimization';

import { getRandomInt } from '../utils';

/** Renders the home page with difficulty selection */
export default function Home(): JSX.Element {
  const [difficulty, setDifficulty] = React.useState('');

  const pieces = React.useRef<string[]>([]);
  const solution = React.useRef<string[]>([]);

  const easyDifficulty = React.useCallback(() => {
    pieces.current = ['grape', 'mango', 'strawberry', 'pineapple'];

    const newSolution = [];

    for (let i = 0; i < 4; i++) {
      newSolution.push(pieces.current[getRandomInt(4)]);
    }

    solution.current = newSolution;
    setDifficulty('easy');
  }, []);

  const hardDifficulty = React.useCallback(() => {
    pieces.current = ['grape', 'mango', 'strawberry', 'pineapple', 'lion'];

    const newSolution = [];

    for (let i = 0; i < 4; i++) {
      newSolution.push(pieces.current[getRandomInt(5)]);
    }

    solution.current = newSolution;
    setDifficulty('hard');
  }, []);

  return (
    <>
      <SearchEngineOptimization title="Home" />
      <main className="grid grid-cols-1">
        {!difficulty ? (
          <>
            <p className="text-center text-xl">Choose a difficulty level...</p>
            <div className="grid grid-cols-2">
              <button
                type="button"
                className="game-mode"
                onClick={easyDifficulty}
              >
                Easy
              </button>
              <button
                type="button"
                className="game-mode"
                onClick={hardDifficulty}
              >
                Hard
              </button>
            </div>
          </>
        ) : (
          <Mastermind
            pieces={pieces}
            setDifficulty={setDifficulty}
            solution={solution}
          />
        )}
      </main>
    </>
  );
}
