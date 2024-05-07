import { useState } from 'react';
import ProductsList from './components/ProductsList';
import LoadButton from './components/LoadButton';
import useStateMachine from './use-state-machine/useStateMachine';
import StateMachineStatus from './components/StateMachineStatus';
import { state, STATES_NAMES } from './states/states';
import { delay } from './utils/delay';
import { loadData } from './utils/fetch';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const { currentStateMachine, transitionTo } = useStateMachine({
    state,
    initState: STATES_NAMES.IDLE,
  });

  const handleLoadDataClick = async () => {
    transitionTo(STATES_NAMES.LOADING);
    await delay(5000); // Delay for display purpose
    try {
      let products = await loadData();
      setProducts(products);
      transitionTo(STATES_NAMES.SUCCESS);
    } catch (err) {
      transitionTo(STATES_NAMES.FAILED);
    }
  };

  return (
    <div className="App">
      <LoadButton
        handleClick={handleLoadDataClick}
        stateMachineStatus={currentStateMachine}
      />
      <StateMachineStatus status={currentStateMachine} />
      <ProductsList currentStateMachine={currentStateMachine} products={products} />
    </div>
  );
}

export default App;
