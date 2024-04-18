import { NavLink } from "react-router-dom";
import "../../styles/footer.css";
import logo from "../../assets/images/ByteBazarLogo.png";
const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="footer_top">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer_nav">
            <nav>
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
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="copyright_area">
          <p>Copyright &copy; 2024 ByteBazaar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
