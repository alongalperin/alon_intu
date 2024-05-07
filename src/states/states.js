export const STATES_NAMES = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};

export const state = {
  [STATES_NAMES.IDLE]: {
    [STATES_NAMES.LOADING]: {
      nextState: STATES_NAMES.LOADING,
    },
  },
  [STATES_NAMES.LOADING]: {
    [STATES_NAMES.SUCCESS]: {
      nextState: STATES_NAMES.SUCCESS,
    },
    [STATES_NAMES.FAILED]: {
      nextState: STATES_NAMES.FAILED,
    },
  },
};
