import { renderHook, act } from '@testing-library/react-hooks';
import useStateMachine from './useStateMachine';

describe('useStateMachine', () => {
  const state = {
    START: {
      RUNNING: {
        nextState: 'RUNNING',
      },
    },
    RUNNING: {
      END: {
        nextState: 'END',
      },
    },
  };
  const initState = 'START';
  const STATES_NAMES = {
    START: 'START',
    RUNNING: 'RUNNING',
    END: 'END',
  };

  let stateMachine = null;
  beforeEach(() => {
    const { result } = renderHook(() =>
      useStateMachine({
        state,
        initState: initState,
      })
    );
    stateMachine = result;
  });

  it('Should create state machine with initial value and transitionTo function', () => {
    expect(stateMachine.current.currentStateMachine).toBe(initState);
    expect(stateMachine.current.transitionTo).toBeDefined();
  });

  it('Should move state to next step', () => {
    act(() => {
      stateMachine.current.transitionTo(STATES_NAMES.RUNNING);
    });

    expect(stateMachine.current.currentStateMachine).toBe(STATES_NAMES.RUNNING);
  });

  it('Should move state to next step twice', () => {
    act(() => {
      stateMachine.current.transitionTo(STATES_NAMES.RUNNING);
    });
    act(() => {
      stateMachine.current.transitionTo(STATES_NAMES.END);
    });

    expect(stateMachine.current.currentStateMachine).toBe(STATES_NAMES.END);
  });
});
