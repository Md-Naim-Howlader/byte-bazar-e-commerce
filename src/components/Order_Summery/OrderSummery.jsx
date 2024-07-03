// import Swal from "sweetalert2";
import "../../styles/orderSummery.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../Context/ContextProvider";

const OrderSummery = ({ btnName, btnPath }) => {
  const { addedCartProducts, handleEmptyCart, dispatch } =
    useContext(ProductContext);
  const navigate = useNavigate();

  const length = addedCartProducts.length;

  let getPrice = 0;
  addedCartProducts.forEach((item) => {
    getPrice = item.price;
  });
  let shiping = 3.99 * length;

  let totalPrice = getPrice * length;
  let totalShiping = shiping * length;
  let totalTax = (getPrice / 9) * length;
  let inTotal = totalPrice + totalShiping + totalTax;

  // click button

  const handleClick = () => {
    navigate(btnPath);
    btnPath == "/orderNow" && handleEmptyCart(dispatch, []);
  };

  return (
    <aside className="order_summery">
      <div className="order_container">
        <div style={{ textAlign: "center" }}>
          <h3>Order Details</h3>
          <p>
            <span>{length}</span> Items Ordered
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Items Price:</td>
              <td>${totalPrice}</td>
            </tr>

            <tr>
              <td>Shipping & Handling:</td>
              <td>${totalShiping.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total tax:</td>
              <td>${totalTax.toFixed(2)}</td>
            </tr>

            <tr>
              <td>Order Total:</td>
              <td>${inTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="review_btn">
          <button onClick={handleClick}>{btnName}</button>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummery;
