import { STATES_NAMES } from '../states/states';

const LoadButton = ({ stateMachineStatus, handleClick }) => {
  const disabled = stateMachineStatus !== STATES_NAMES.IDLE;

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={'btn ' + (disabled ? 'btn-disabled' : '')}
    >
      Load Products
    </button>
  );
};

export default LoadButton;
