import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container p-4 pb-0">
      <section>
        <div className="row">
          <div
            className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"
            style={{ margin: "20px auto" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="./Images/logo.png"
                alt=""
                style={{ width: "50px", marginRight: "10px" }}
              />
              <h6 className="text-uppercase mb-2 font-weight-bold">
                Flower Shop
              </h6>
            </div>
            <p>
              Flowers are nature’s art, colorful, fragrant, and diverse,
              bringing joy and beauty to the world.
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold ">
              Useful links
            </h6>
            <p>
              <Link
                to="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </p>
            <p>
              <Link
                to="/contact"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </p>
            <p>
              <Link
                to="/about"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>
            </p>
            <p>
              <Link
                to="/gallery"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Gallery
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3"></i> Mansoura,
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i> flower@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3"></i> 012-3456789
            </p>
            <p>
              <i className="fa fa-print mr-3"></i> 012-3456789
            </p>
          </div>
        </div>
      </section>

      <hr className="my-3" />

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              &copy; Copyright:
              <a className="text-white fw-bold" href="/" style={{textDecoration:"none"}}> Flower Shop
              </a>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a
              href="https://www.facebook.com/"
              className="mx-2"
              role="button"
            >
              <i className="fa fa-facebook text-primary fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="mx-2"
              role="button"
            >
              <i className="fa fa-twitter text-info fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="mx-2"
              role="button"
            >
              <i
                className="fa fa-instagram fa-2x grad"
                style={{ color: "" }}
              ></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;