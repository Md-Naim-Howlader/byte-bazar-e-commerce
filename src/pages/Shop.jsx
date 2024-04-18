import { useContext, useEffect } from "react";
import "../styles/shop.css";

import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import ProductItem from "../components/ProductItem/ProductItem";
import OrderSummery from "../components/Order_Summery/OrderSummery";
import { ProductContext } from "../Context/productProvider";

const Shop = () => {
  const { data, error, loading } = useContext(ProductContext);

  useEffect(() => {
    document.title = "Shop | ByteBazaar E-commerce";
  }, []);

  return (
    <section className="shop_section">
      <div className="container">
        <div className="products">
          {loading && <Loading />}
          {error && <Error msg={error} />}
          {data.map((productItem) => (
            <ProductItem key={productItem.id} productItem={productItem} />
          ))}
        </div>
        <OrderSummery btnName={"Review Your Order"} btnPath={"/orderReview"} />
      </div>
    </section>
  );
};

export default Shop;
