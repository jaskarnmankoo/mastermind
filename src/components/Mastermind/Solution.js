import * as React from 'react';

export const Solution = (props) => {
  let solutionPegs = [];
  let solutionClass = '';
  const isHidden = props.state.defeat && !props.state.victory ? '' : ' hidden';
  const playAgain = props.state.defeat || props.state.victory ? '' : ' hidden';
  for (let i = 0; i < props.state.trueRow.length; i++) {
    solutionClass = props.state.trueRow[i];
    solutionPegs.push(
      <div className={'color-holder ' + solutionClass} key={'s_' + i}></div>
    );
  }
  return (
    <div className="solution colors">
      <div className={isHidden}>
        <p className="text-xl">Solution:</p>
        {solutionPegs}
      </div>
      <div className={playAgain}>
        <button className="game-mode mt-4" onClick={props.newGame}>
          Play Again?
        </button>
      </div>
    </div>
  );
};
