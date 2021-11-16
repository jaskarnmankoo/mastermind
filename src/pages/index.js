import * as React from 'react';

import Mastermind from '../components/Mastermind';
import SearchEngineOptimization from '../components/SearchEngineOptimization';

export default function Home() {
  const [difficulty, setDifficulty] = React.useState('');

  return (
    <>
      <SearchEngineOptimization title="Home" />
      <main className="grid grid-cols-1">
        {!difficulty ? (
          <>
            <p className="text-xl text-center">Choose a difficulty level...</p>
            <div className="grid grid-cols-2">
              <button
                className="game-mode"
                onClick={() => setDifficulty('easy')}
              >
                Easy
              </button>
              <button
                className="game-mode"
                onClick={() => setDifficulty('hard')}
              >
                Hard
              </button>
            </div>
          </>
        ) : (
          <Mastermind difficulty={difficulty} />
        )}
      </main>
    </>
  );
}
