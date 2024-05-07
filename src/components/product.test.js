import { render } from '@testing-library/react';

import Product from './Product';

describe('Product item', () => {
  it('should render item with title and image', () => {
    const title = 'item title';
    const thumbnailUrl = 'www.com.il';

    const product = {
      title,
      thumbnail: thumbnailUrl,
    };

    const { getByText, getByAltText } = render(<Product product={product} />);
    const productText = getByText(title);
    const image = getByAltText('product');

    expect(productText).toBeInTheDocument();
    expect(image.src).toContain(thumbnailUrl);
  });
});
