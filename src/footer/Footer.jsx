import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section bg-dark text-light pt-5 pb-3">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-white">Quick Links</h5>
            <ul className="list-unstyled footer-links mt-3">
              <li>Join</li>
              <li>Login</li>
              <li>Contact Us</li>
              <li>FAQ's</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-white">Other Links</h5>
            <ul className="list-unstyled footer-links mt-3">
              <li>Privacy Policy</li>
              <li>Refund & Cancellation Policy</li>
              <li>Terms & Conditions</li>
              <li>Merchant Agreement</li>
              <li>Disclaimer</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-white">Social</h5>
            <div className="d-flex gap-3 mt-3">
              <span className="social-icon">
                <FaFacebookF />
              </span>
              <span className="social-icon">
                <FaTwitter />
              </span>
              <span className="social-icon">
                <FaInstagram />
              </span>
              <span className="social-icon">
                <FaLinkedinIn />
              </span>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider mt-4" />

        <div className="text-center mt-3 footer-bottom-text">
          <p className="mb-0">Copyright © 2023</p>
          <p className="mb-0">Powered By</p>
        </div>
      </Container>
    </footer>
  );
}
