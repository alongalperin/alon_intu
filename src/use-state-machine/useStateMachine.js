import { useEffect, useState } from 'react';

const useStateMachine = ({ state, initState }) => {
  const [currentStateMachine, setCurrentStateMachine] = useState(null);

  useEffect(() => {
    if (currentStateMachine === null) {
      setCurrentStateMachine(() => initState);
    }
  }, [initState, currentStateMachine]); // TODO: check if need this useEffect

  const transitionTo = (newState) => {
    setCurrentStateMachine((prevCurrentStateMachine) => {
      const nextState = state[prevCurrentStateMachine][newState];
      return nextState.nextState;
    });
  };

  return { currentStateMachine, transitionTo };
};

export default useStateMachine;
