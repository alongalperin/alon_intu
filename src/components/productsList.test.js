import { render } from '@testing-library/react';
import ProductsList from './ProductsList';
import { STATES_NAMES } from '../states/states';

const generateProducts = (limit) => {
  const products = [];

  for (let i = 1; i <= limit; i++) {
    products.push({
      title: `item ${i}`,
      thumbnail: `www.com.${i}`,
    });
  }

  return products;
};
const limit = 5;
const products = generateProducts(limit);

describe('ProductsList', () => {
  it('Should render list of products', () => {
    const { container } = render(
      <ProductsList
        currentStateMachine={STATES_NAMES.SUCCESS}
        products={products}
      />
    );

    expect(
      container.getElementsByClassName('product-item-container').length
    ).toEqual(limit);
  });

  it('Should show failed message when state=FAILED', () => {
    const { container, getByText } = render(
      <ProductsList
        products={products}
        currentStateMachine={STATES_NAMES.FAILED}
      />
    );

    const listText = getByText('Failed to load products');

    expect(
      container.getElementsByClassName('product-item-container').length
    ).toEqual(0);
    expect(listText).toBeInTheDocument();
  });
});
