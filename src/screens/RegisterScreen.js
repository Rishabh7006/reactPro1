import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'

const RegisterScreen = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
          <div className="container-fluid register-container">
            <div className="row pt-sm-0 pt-lg-5">
              <div className="col-md-6 p-5 left-section bg-dark text-light d-flex align-items-center justify-content-center">
                {/* Image on the left side */}
                <img
                  src={logo}
                  alt="Death Note"
                  style={{ width: '100%', height: 'auto', maxWidth: '400px', maxHeight: '400px', objectFit: 'cover' }}
                  className="img-fluid image"
                />
              </div>
              <div className="col-md-6 pt-5 right-section bg-dark text-light p-4">
                {/* Dark-themed registration form */}
                <form className="register-form">
                  <h2 className="mb-4">Death Note Registration</h2>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" className="form-control" placeholder="Enter your username" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-danger btn-block">Register</button>
                  <p className="mt-3 text-center">
                    Already have an account? <Link to="/login" className="text-warning">Login here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default RegisterScreen;
