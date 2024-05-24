import "./Shop.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./ShopComponents/Product";
import { FaEarthAfrica } from "react-icons/fa6";

const baseUrl = process.env.REACT_APP_BASE_URL;
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product/getProducts`);
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <FaEarthAfrica className="overlay-earth-1" />
      <FaEarthAfrica className="overlay-earth-2" />
      <FaEarthAfrica className="overlay-earth-3" />
      <div className="shop-cover">
        <div className="text">
          <h1>SHOP</h1>
          <p>
            Explore our curated collection below and find your next favorite
            item!
          </p>
        </div>
        <img
          src="https://assets.newatlas.com/dims4/default/42857a0/2147483647/strip/true/crop/1527x1018+0+31/resize/1200x800!/quality/90/?url=http:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Ffreezing-ewaste-4.jpg"
          alt=""
        />
      </div>
      <Container>
        <div className="shop">
          {products.map((product) => (
            <Product
              key={product._id}
              title={product.title}
              img={product.Image.secure_url}
              description={product.description}
              price={product.price}
              _id={product._id}
              onClick={() => (window.location.href = `/shop/${product._id}`)}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Shop;
