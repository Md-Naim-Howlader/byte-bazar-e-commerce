import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/ByteBazarLogo.png";
import "../../styles/header.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { ProductContext } from "../../Context/ContextProvider";

const Header = () => {
  const { addedCartProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="item_container">
            <div className="logo">
              <img src={logoImg} alt="ByteBazar Logo" />
            </div>
            <div className="three_items">
              <div className="search_and_orderSummery">
                <input type="text" placeholder="Type here to Search" />
              </div>
             
              <div
                className="add_to_cart_icon"
                onClick={() => navigate("/orderReview")}
              >
                <span>
                  <FaShoppingCart />{" "}
                </span>
                <span>{addedCartProducts.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ul>
            <li>
              <NavLink to={"/"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/orderReview"}>Order Review</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/helpSupport"}>Help & Support</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
