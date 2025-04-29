import React from 'react';

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center my-3 col-xxl-8">
        <h2 className="display-5 fw-bolder">
              <span className="text-gradient d-inline">Login</span>
            </h2>
            <p className="text-muted">
              Login to your account.
            </p>

          <div className="card">
            
              
              <form className="p-3 border border-2 border-dark">
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" required />
                </div>
                <button type="submit" className="btn-gradient" value="Submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Login;
