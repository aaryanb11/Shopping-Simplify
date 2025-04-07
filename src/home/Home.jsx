import React from "react";
import "./Home.css";
import photo1 from "./img/photo-1.jpg";
import photo2 from "./img/photo-2.jpg";
import photo3 from "./img/photo-3.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const features = [
    "Easy management",
    "Add/Delete Products Categories",
    "Add/Delete Products & download links",
    "Coupons System to offer discount coupons to others",
    "View/Edit/Delete customers",
    "Email Customers",
    "2CO, Authorize, CCAvenue, CoinPayments, DirecPay, EBS, Instamojo, Paypal, Paytm, Payumoney, Payza",
    "Completely Customizable affiliate program up to 3 levels.",
    "You can change the settings to Pay Affiliates either fixed % of sale or fixed $ amount of each sale.",
    "You can change the settings to Pay Affiliates either per product or per complete order.",
    "View/Edit/Delete Affiliates.",
    "Email Affiliates.",
  ];
  return (
    <div className="home-section container py-5">
      {/* 1st part */}
      <div className="container-fluid bg-light py-5">
        <div className="row align-items-center min-vh-100 px-4">
          {/* Left side - Image with background effects */}
          <div className="col-md-6 position-relative text-center mb-5 mb-md-0">
            <div
              className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle opacity-25"
              style={{
                width: "200px",
                height: "200px",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            ></div>
            <div
              className="position-absolute bottom-0 end-0 translate-middle bg-info rounded-circle opacity-25"
              style={{
                width: "200px",
                height: "200px",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            ></div>

            <div
              className="position-relative bg-white p-3 rounded shadow"
              style={{ zIndex: 1, display: "inline-block" }}
            >
              <img
                src={photo3}
                alt="Digital shopping cart visualization"
                className="img-fluid rounded"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold text-dark mb-4">
              Looking For A Fully-Featured Shopping Cart Script That Won't Break
              Your Budget Before You Open The Doors Of Your{" "}
              <span className="text-dark">New</span>{" "}
              <span className="text-primary">Digital Product Store?</span>
            </h1>

            <p className="lead text-muted">
              The Easy Solution For Opening Your Own Digital Product Store
              Online
            </p>

            <p className="text-muted">
              The ShoppingSimplify.com solution offers a low annual payment of
              just $149 with no other hidden fees applicable. This price point
              is made to be affordable for the average business owner to
              maintain without raising overheads to a mitigating level.
            </p>

            <button className="btn btn-primary btn-lg mt-3 shadow">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold mb-3">
          Why Choose <span className="text-primary">ShoppingSimplify?</span>
        </h2>
        <p className="text-muted mb-4">
          Easy To Use, Easy To Manage, Easy To Modify
        </p>
      </div>

      {/* Section 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-1">
          <div className="circle-number bg-info text-white">1</div>
        </div>
        <div className="col-md-5">
          <h5 className="fw-bold">Awesome Design Template</h5>
          <p className="text-muted">
            We've made it easy for you to get up and running quickly with your
            own online store. Once you place an order and provide us with a
            domain name, we will install the script for you without any fuss.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={photo1}
            alt="mockup"
            className="img-fluid rounded shadow-sm"
            style={{ maxWidth: "50%" }}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="row align-items-center mb-5">
        <div className="col-1">
          <div className="circle-number bg-danger text-white">2</div>
        </div>
        <div className="col-md-5">
          <h5 className="fw-bold">Professional Look</h5>
          <p className="text-muted">
            Once the script has been installed on your domain, you will only
            need to customise the settings and choose a store template from our
            library. If you have an existing offline business that you want to
            migrate to a web presence, you can also include your own header with
            brand logo if you wish.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={photo2}
            alt="gallery"
            className="img-fluid rounded shadow-sm"
            style={{ maxWidth: "50%" }}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="row align-items-start mb-4">
        <div className="col-1">
          <div className="circle-number bg-info text-white">3</div>
        </div>
        <div className="col-md-11">
          <h5 className="fw-bold">Easy To Operate</h5>
          <p className="text-muted">
            You don't need to have any technical knowledge to operate your new
            store or worry about accessing cpanel to make site changes. If you
            have something to sell, this program is perfectly tailored to suit
            your needs as you can do everything from the admin panel.
          </p>
        </div>
      </div>
      {/* 3rd part */}
      <h2 className="text-center fw-bold mb-3">
        The Administration Area Is{" "}
        <span className="text-primary">Easy-To-Use</span> And Provides You With
        The Following <span className="text-primary">Functionality</span>
      </h2>

      <div className="rainbow-bg p-4 rounded-4 mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {features.map((item, index) => (
            <div className="col" key={index}>
              <div className="feature-card d-flex align-items-start p-3 bg-white rounded-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="green"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "15px" }}
                >
                  <path d="M12 2L10.59 3.41 17.17 10H2v2h15.17l-6.58 6.59L12 22l10-10L12 2z" />
                </svg>
                <p className="mb-0 text-secondary">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
