import React from 'react';
import { Link } from 'react-router-dom';
import gif3 from '../assets/gif3.gif'

const LoginScreen = () => {
  return (
    <div className="">
      <div className="row pt-sm-0 pt-lg-5">
        <div className="col-md-6 p-5 left-section bg-dark text-light d-flex align-items-center justify-content-center">
          {/* Image on the left side */}
          <img
            src={gif3}
            alt="Death Note"
            style={{ width: '70%', height: 'auto', maxWidth: '500px', maxHeight: '420px', objectFit: 'cover' }}
            className="img-fluid image"
          />
        </div>
        <div className="col-md-6 pt-5 right-section bg-dark text-light p-4">
          {/* Dark-themed login form */}
          <form className="login-form">
            <h2 className="mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input type="text" id="username" name="username" className="form-control" placeholder="Enter your username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
            <p className="mt-3 text-center">
              Don't have an account? <Link to="/register" className="text-warning">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
