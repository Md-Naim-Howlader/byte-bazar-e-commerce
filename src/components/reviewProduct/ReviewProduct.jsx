import { useContext } from "react";
import { ProductContext } from "../../Context/ContextProvider";

const ReviewProduct = ({ productItem, allProduct, index }) => {
  const { id, thumbnail, category, title, price, brand } = productItem;

  const quantity = allProduct.filter((item) => item.id === index).length;

  const { dispatch, handleRemoveToCartProduct } = useContext(ProductContext);
  const handleRemove = (id) => {
    handleRemoveToCartProduct(dispatch, id);
  };
  return (
    <div className="product">
      <img src={thumbnail} alt={title} />
      <div className="product_content">
        <div className="product_heading_description">
          <h3>
            {title} {category}
          </h3>
        </div>
        <h5>Brand: {brand}</h5>
        <h5>Price: ${price}</h5>
        <h5>Quantity: {quantity}</h5>

        <button onClick={() => handleRemove(id)}>Remove Product</button>
      </div>
    </div>
  );
};

export default ReviewProduct;
