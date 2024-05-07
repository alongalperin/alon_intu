import { STATES_NAMES } from '../states/states';
import Product from './Product';
import Loader from './Loader';

const renderProductsList = (state, products) => {
  console.log('render: ', products.length);
  switch (state) {
    case STATES_NAMES.IDLE:
      return <p>Products list is waiting for click loading</p>;
    case STATES_NAMES.LOADING:
      return (
        <>
          <Loader />
          <p>loading products from internet</p>
        </>
      );
    case STATES_NAMES.SUCCESS: // TODO: move to function
      return (
        <div key="products-list" className="products-container">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      );
    case STATES_NAMES.FAILED:
      return <p>Failed to load products</p>;
    default:
      return <p>IDLE</p>;
  }
};

const ProductsList = ({ currentStateMachine, products }) => {
  return <>{renderProductsList(currentStateMachine, products)}</>;
};

export default ProductsList;
