import { IoMdClose } from "react-icons/io";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import "./CartItem.css";
import { useState } from "react";

const CartItem = ({ item, cart, setCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const onIncreaseQnt = () => {
    setQuantity(quantity + 1);
    const newCart = cart.map((val) => {
      if (val._id === item._id) {
        return { ...val, quantity: quantity + 1 };
      }
      return val;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const onDecreaseQnt = () => {
    setQuantity(quantity - 1 || 1);
    const newCart = cart.map((val) => {
      if (val._id === item._id) {
        return { ...val, quantity: quantity - 1 || 1 };
      }
      return val;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const onDeleteProduct = () => {
    const newCart = cart.filter((val) => val._id !== item._id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <div className="main">
          <img src={item.Image.secure_url} alt={item.name} />
          <div className="item-title">{item.title}</div>
        </div>
        <div className="qnt">
          <div className="item-quantity">{quantity}</div>
          <div className="cart-item-icons">
            <FaCirclePlus onClick={onIncreaseQnt} />
            <FaCircleMinus onClick={onDecreaseQnt} />
          </div>
        </div>
        <span>
          <p>EGP</p>
          <p className="item-price">{item.price * quantity}</p>
          <p>000</p>
        </span>
      </div>
      <IoMdClose className="close-icon" onClick={onDeleteProduct} />
    </div>
  );
};

export default CartItem;
