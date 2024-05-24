import "./Product.css";

const Product = ({ title, img, price, onClick }) => {
  return (
    <div className="product" onClick={onClick}>
      <img src={img} alt={title} />
      <h3
        style={{
          fontSize: title.length > 15 ? "1.5vw" : "1.7vw",
        }}
      >
        {title}
      </h3>
      <div className="price">
        <p>EGP</p>
        <p style={{ fontSize: "1.6vw", fontWeight: 600 }}>{price}</p>
        <p>000</p>
      </div>
    </div>
  );
};

export default Product;
