import "./Services.css";
import { FaLeaf, FaPlug, FaBrain, FaHeadphones } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <FaLeaf className="icon" />
        <h3>Environmental awareness</h3>
        <p>It is the key to preserving our planet for future generations.</p>
      </div>
      <div className="service">
        <FaHouse className="icon" />
        <h3>Garbage store</h3>
        <p>
          It is a concept aiming to repurpose waste materials creatively,
          transforming them into valuable resources.
        </p>
      </div>
      <div className="service">
        <FaPlug className="icon" />
        <h3>Recycling project ideas</h3>
        <p>
          It inspires communities to innovate sustainable solutions, fostering
          creativity in reducing environmental impact.
        </p>
      </div>
      <div className="service">
        <FaBrain className="icon" />
        <h3>Smart Assistant</h3>
        <p>
          It seamlessly integrates into daily life, streamlining tasks and
          providing personalized assistance.
        </p>
      </div>
      <div className="service">
        <FaHeadphones className="icon" />
        <h3>Suggest sales outlets</h3>
        <p>
          They offer tailored recommendations, guiding consumers to find the
          perfect products for them.
        </p>
      </div>
    </div>
  );
};

export default Services;
