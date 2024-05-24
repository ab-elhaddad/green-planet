import { Container } from "react-bootstrap";
import "./ContactUs.css";
import { MDBIcon } from "mdb-react-ui-kit";

const ContactUs = () => {
  return (
    <Container>
      <div className="contact-conatiner">
        <div className="contact-methods">
          <div className="method">
            <MDBIcon icon="earth" className="icon" />
            <h3>Our Main Office</h3>
            <p>SoHo 94 Boradway St New York, NY 1001</p>
          </div>
          <div className="method">
            <MDBIcon icon="earth" className="icon" />
            <h3>Phone Number</h3>
            <p style={{ margin: "0" }}>234-9876-5700 </p>
            <p> 888-01234567 (Toll Free)</p>
          </div>
          <div className="method">
            <MDBIcon icon="earth" className="icon" />
            <h3>Fax</h3>
            <p>1-234-567-8900</p>
          </div>
          <div className="method">
            <MDBIcon icon="earth" className="icon" />
            <h3>Email</h3>
            <p>green@planet.com</p>
          </div>
        </div>
        <div className="contact-card">
          <h1>Contact Us</h1>
          <form>
            <input type="text" placeholder="Enter your Name" required />
            <input
              type="email"
              placeholder="Enter a valid Email address"
              required
            />
            <input type="text" required className="msg" />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
