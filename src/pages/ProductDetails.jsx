import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./ProductDetails.css";

const baseUrl = process.env.REACT_APP_BASE_URL;
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    Image: { secure_url: "" },
    createdBy: { fullName: "", phoneNumber: "" },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/product/getProductById/${id}`
        );
        console.log(response.data.data);
        setProduct(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  const onAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const newCart = [...cart];
    const found = newCart.find((item) => item._id === product._id);
    if (found) {
      found.quantity++;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <Container>
      <div className="product-container">
        <div className="product-details">
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          <p>
            Sold by: {product?.createdBy?.fullName} -{" "}
            {product?.createdBy?.phoneNumber}
          </p>
          <div className="product-price">
            <span>
              <p>EGP</p>
              <p className="price-number">{product.price}</p>
              <p>000</p>
            </span>
            <input
              type="button"
              value="Add to cart"
              className="btn"
              onClick={onAddToCart}
            />
          </div>
        </div>
        <img
          src={product.Image.secure_url}
          alt={product.title}
          className="product-image"
        />
      </div>
    </Container>
  );
};

export default ProductDetails;
