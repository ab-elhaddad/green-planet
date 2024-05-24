import axios from "axios";
import { useState } from "react";
import "./Cart.css";
import { MDBIcon } from "mdb-react-ui-kit";
import { BiLogoMastercard } from "react-icons/bi";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import CartItem from "./CartComponents/CartItem";
import { MdArrowBack } from "react-icons/md";

const baseUrl = process.env.REACT_APP_BASE_URL;
const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  console.log(cart);

  const onCheckout = async () => {
    const cartData = cart.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
    }));
    const totalPrice = calculateTotal();
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;

    await axios.post(
      `${baseUrl}/order/addOrder`,
      {
        cartData,
        totalPrice,
        phoneNumber,
        address,
      },
      {
        headers: {
          "access-token": localStorage.getItem("access-token"),
        },
      }
    );

    alert("Order Placed Successfully!");
    setCart([]);
  };

  return (
    <div className="cart-container">
      <div className="left">
        <div className="cart-header">
          <MDBIcon icon="earth" />
          <div className="vertical-line" />
          <div>Your Cart</div>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
        <div className="cart-footer">
          <div className="cart-back">
            <MdArrowBack className="back-icon" />
            <p>Back to Shop</p>
          </div>
          <div className="subtotal">
            <p>Subtotal:</p>
            <p style={{ fontWeight: "500" }}>
              {calculateTotal()}
              .00 EGP
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="card-fields-container">
          <h1>Card Details</h1>
          {/* <p>Select card type</p> */}
          <div className="card-types">
            <BiLogoMastercard />
            <RiVisaLine />
            <FaCcPaypal />
          </div>
          <div className="card-number">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" />
          </div>

          <div className="card-details">
            <div className="exp-date">
              <label htmlFor="exp-date">Expiration Date</label>
              <input type="text" id="exp-date" placeholder="DD/MM/YYYY" />
            </div>
            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" />
            </div>
          </div>
        </div>
        <div className="card-fields-container" style={{ paddingTop: "0px" }}>
          <h1>Order Details</h1>
          <div className="card-number">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" />
          </div>
          <div className="card-number">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
        </div>
        <div className="checkout" onClick={onCheckout}>
          Checkout
        </div>
      </div>
    </div>
  );
};

export default Cart;
