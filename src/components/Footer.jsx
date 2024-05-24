import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const FooterComp = () => {
  return (
    <MDBFooter className="footer text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="footer-icon" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="footer-icon" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="footer-icon" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="footer-icon" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="footer-icon" fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon className="footer-icon me-3" icon="earth" />
                Green Planet
              </h6>
              <p>
                We are dedicated to e-waste recycling, specializing in
                responsibly disposing of electronic devices to mitigate
                environmental impact. With cutting-edge technology and a
                commitment to sustainability.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  CPU
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  RAM
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Mobile Phones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Monitor
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/shop" className="text-reset">
                  Shop
                </a>
              </p>
              <p>
                <a href="/steps" className="text-reset">
                  Steps
                </a>
              </p>
              <p>
                <a href="/contact-us" className="text-reset">
                  Conatct Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="footer-icon me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="footer-icon me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="footer-icon me-3" /> + 01 234
                567 88
              </p>
              <p>
                <MDBIcon icon="print" className="footer-icon me-3" /> + 01 234
                567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default FooterComp;
