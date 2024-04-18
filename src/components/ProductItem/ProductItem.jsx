import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from "../../Context/productProvider";

const ProductItem = ({ productItem }) => {
  const { thumbnail, category, title, description, price, stock, brand } =
    productItem;
  const { handleAddToCartProduct, dispatch } = useContext(ProductContext);
  const handleAddProduct = () => {
    handleAddToCartProduct(dispatch, productItem);
  };
  return (
    <div className="product">
      <img src={thumbnail} alt={title} />
      <div className="product_content">
        <div className="product_heading_description">
          <h3>
            {title} {category}
          </h3>
          <p>{description}</p>
        </div>
        <h5>Brand: {brand}</h5>
        <h5>Price: ${price}</h5>
        <p>Only {stock} days left in stock - order soon</p>
        <button onClick={handleAddProduct}>
          <FaShoppingCart /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
