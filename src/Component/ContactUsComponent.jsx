import React from 'react';
function Contact() {
  return (
    <div className="container px-5">
      <div className="row gx-5 justify-content-center">
        <div className="col-xxl-8">
          <div className="text-center my-5">
            <h2 className="display-5 fw-bolder">
              <span className="text-gradient d-inline">Contact Us</span>
            </h2>
            <p className="text-muted">
              Please fill out the form below to get in touch with us.
            </p>

            <form className="p-3 border border-2 border-dark">
              <div className="form-group my-3 p-2">
                <label For="name">Name</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group my-3 p-2">
                <label For="email">Email</label>
                <input
                  type="email"
                  className="form-control my-2"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group my-3 p-2">
                <label For="subject">Subject</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="subject"
                  placeholder="Enter the subject"
                  required
                />
              </div>
              <input type="submit" className="btn-gradient" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;