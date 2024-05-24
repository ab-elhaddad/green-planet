import axios from "axios";
import { AiFillProduct } from "react-icons/ai";
import "./AddProduct.css";

const baseUrl = process.env.REACT_APP_BASE_URL;
const AddProduct = () => {
  const onAddProduct = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const image = e.target.image.files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${baseUrl}/product/addProduct`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "access-token": localStorage.getItem("access-token"),
          },
        }
      );

      alert(response.data.message);
      e.target.reset();
    } catch (error) {
      console.log(error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <div className="icon-container">
        <AiFillProduct className="icon" />
      </div>
      <div className="add-product-card">
        <form action="sumbit" onSubmit={onAddProduct}>
          <div className="input-container">
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="Product Title"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="description"
              id="description"
              required
              minLength={8}
              placeholder="Product Description"
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              name="price"
              id="price"
              required
              minLength={8}
              placeholder="Product Price"
            />
          </div>
          <div className="input-container">
            <input type="file" name="image" id="image" required />
          </div>
          <input type="submit" value="Add Product" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
