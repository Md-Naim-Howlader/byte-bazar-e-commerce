import { useContext, useEffect, useState } from "react";

import "../styles/orderReview.css";
import ReviewProduct from "../components/reviewProduct/ReviewProduct";

import OrderSummery from "../components/Order_Summery/OrderSummery";
import { ProductContext } from "../Context/ContextProvider";

const OrderReview = () => {
  const { addedCartProducts } = useContext(ProductContext);
  const [separateProducts, setSeparateProducts] = useState([]);
  console.log(addedCartProducts);
  //filter same id
  const filterdProduct = (array) => {
    return array.reduce((prevProduct, product) => {
      const id = product.id;
      if (!prevProduct[id]) {
        prevProduct[id] = [];

        prevProduct[id].push(product);
      }

      return prevProduct;
    }, []);
  };

  useEffect(() => {
    //title
    document.title = "Order Review | ByteBazaar E-commerce";

    //filterdProduct function invoke
    const data = filterdProduct(addedCartProducts);
    setSeparateProducts(data);
  }, [addedCartProducts]);

  return (
    <section>
      <div className="container">
        <div className="review_summary">
          <div className="products">
            {separateProducts.length > 0 ? (
              separateProducts
                .map((item) => item[0])
                .map((item, i) => (
                  <ReviewProduct
                    key={i}
                    productItem={item}
                    allProduct={addedCartProducts}
                    index={i}
                  />
                ))
            ) : (
              <div>
                <h1>Product not added yet!</h1>
              </div>
            )}
          </div>
          <div>
            <OrderSummery btnName={"Order Now"} btnPath={"/orderNow"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReview;
