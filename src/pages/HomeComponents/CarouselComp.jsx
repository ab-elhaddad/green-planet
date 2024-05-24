import Carousel from "react-bootstrap/Carousel";
import "./CarouselComp.css";

const carouselImgs = [
  "https://th.bing.com/th/id/R.0f3858e368fc62849220ab54d56d5156?rik=3QM5wzJveo4aSw&pid=ImgRaw&r=0",
  "https://www.familyhandyman.com/wp-content/uploads/2018/01/shutterstock_151658033.jpg",
  "https://www.recyclepro.co.uk/admin-wr/dashboard/assets/Blogs/considerations-for-getting-rid-of-old-cell-phones.webp",
];

const CarouselComp = () => {
  return (
    <div style={{ position: "relative" }} className="carousel">
      <div className="carousel-caption">
        <h3>
          Welcome to <span>Green Planet</span>
        </h3>
        <p>Where life emerges from the rubble</p>
      </div>
      <Carousel>
        {carouselImgs.map((img, index) => (
          <Carousel.Item key={index}>
            <img src={img} alt={`rubbish pic ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
