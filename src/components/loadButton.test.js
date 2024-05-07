import { render } from '@testing-library/react';
import LoadButton from './LoadButton';
import { STATES_NAMES } from '../states/states';

describe('LoadButton', () => {
  it('should be disabled when STATE is not IDLE', () => {
    const { container } = render(
      <LoadButton
        stateMachineStatus={STATES_NAMES.LOADING}
        handleClick={jest.fn()}
      />
    );

    const button = container.getElementsByClassName('btn')[0];

    expect(button).toBeDisabled();
  });

  it('should be enabled when STATE is IDLE', () => {
    const { container } = render(
      <LoadButton
        stateMachineStatus={STATES_NAMES.IDLE}
        handleClick={jest.fn()}
      />
    );

    const button = container.getElementsByClassName('btn')[0];

    expect(button).toBeEnabled();
  });
});
