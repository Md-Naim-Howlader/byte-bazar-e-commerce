import { useEffect } from "react";
import Swal from "sweetalert2";

const OrderNow = () => {
  useEffect(() => {
    Swal.fire({
      icon: "success",
      title: "Order Successfully Placed!",
      text: "Thank you for your purchase.",
      confirmButtonText: "OK",
    });
  }, []);

  return (
    <div style={{ height: "80vh" }}>
      <h1>Congratulations! Your Order Successfully.</h1>
    </div>
  );
};

export default OrderNow;
