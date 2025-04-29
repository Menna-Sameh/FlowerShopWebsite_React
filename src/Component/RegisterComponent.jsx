import React from 'react';

function Register() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center my-3 col-xxl-8">
          <h2 className="display-5 fw-bolder">
            <span className="text-gradient d-inline">Register</span>
          </h2>
          <p className="text-muted">Create a new account.</p>

          <div className="card">
            <form className="p-3 border border-2 border-dark">
              <div className="row mb-4">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email address or Mobile number
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email or mobile number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select className="form-select" id="gender" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-gradient" value="Submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
