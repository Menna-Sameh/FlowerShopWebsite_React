import React from 'react';

function Cart() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4 text-gradient">Your Cart</h1>
          {/* Product 1 */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <img src="./Images/G1.jpg" alt="Product 1" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4 className="card-title text-gradient d-inline mb-3">Enchanted Elegance Bouquet</h4>
                  <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">-</button>
                    <input type="text" className="form-control text-center" value="1" />
                    <button className="btn btn-outline-secondary" type="button">+</button>
                  </div>
                  
                  <button className="btn btn-outline-danger btn-sm mb-2"><i className="fa fa-trash"></i></button>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-end">
                    <button className="btn btn-outline-danger btn-sm mb-2"><i className="fa fa-heart"></i></button>
                    <h5 className="mb-0">$19.99</h5>
                    <h5 className="mb-0">Total: $19.99</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <img src="./Images/G6.jpg" alt="Product 2" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4 className="card-title text-gradient d-inline mb-3">Dreams Bouquet</h4>
                  <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">-</button>
                    <input type="text" className="form-control text-center" value="1" />
                    <button className="btn btn-outline-secondary" type="button">+</button>
                  </div>
                  
                  <button className="btn btn-outline-danger btn-sm mb-2"><i className="fa fa-trash"></i></button>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-end">
                    <button className="btn btn-outline-danger btn-sm mb-2"><i className="fa fa-heart"></i></button>
                    <h5 className="mb-0">$24.99</h5>
                    <h5 className="mb-0">Total: $24.99</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <img src="./Images/G9.jpg" alt="Product 3" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4 className="card-title text-gradient d-inline mb-3">Sun-kissed Serenity Bouquet</h4>
                  <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">-</button>
                    <input type="text" className="form-control text-center" value="1" />
                    <button className="btn btn-outline-secondary" type="button">+</button>
                  </div>
                  <button className="btn btn-outline-danger btn-sm mb-2"><i className="fa fa-trash"></i></button>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column align-items-end">
                    <button className="btn btn-outline-danger btn-sm mb-2"><i className="fa fa-heart"></i></button>
                    <h5 className="mb-0">$29.99</h5>
                    <h5 className="mb-0">Total: $29.99</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more product cards as needed */}
        </div>
      </div>
      <div className="row justify-content-center mt-1">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h4 className="mb-0">Total: $74.97</h4>
              <button className="btn btn-primary mt-3 btn-gradient">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
