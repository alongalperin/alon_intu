import { useState } from 'react';

const useStateMachine = ({ state, initState }) => {
  const [currentStateMachine, setCurrentStateMachine] = useState(initState);

  const transitionTo = (newState) => {
    setCurrentStateMachine((prevCurrentStateMachine) => {
      const nextState = state[prevCurrentStateMachine][newState];
      return nextState.nextState;
    });
  };

  return { currentStateMachine, transitionTo };
};

export default useStateMachine;
