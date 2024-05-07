const Product = ({ product }) => {
  const { title, thumbnail } = product;

  return (
    <div className="product-item-container">
      <p className="product-item-title">{title}</p>
      <img className="product-item-image" src={thumbnail} alt="product" />
    </div>
  );
};

export default Product;
