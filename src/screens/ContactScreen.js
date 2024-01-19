import React from 'react';
import gifImg from '../assets/gif2.gif'

const ContactScreen = () => {
  return (
      <div>
          <section className="py-5 bg-secondary">
              <div className="container">
                  <div className="row align-items-center justify-content-between">
                      <div className="col-lg-6 bg-white p-5">
                          <h2 className="display-6 fw-bold text-center mb-4">Contact Us</h2>
                          <form>
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <input className="form-control bg-light" placeholder="First name" type="text" />
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <input className="form-control bg-light" placeholder="Last name" type="text" />
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <input className="form-control bg-light" placeholder="Email address" type="text" />
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-3">
                                          <input className="form-control bg-light" placeholder="Phone number" type="text" />
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <textarea className="form-control bg-light" placeholder="Your message" rows="4"></textarea>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="d-grid">
                                          <button className="btn btn-secondary" type="submit">Send message</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div className="col-lg-5 text-white mt-5 mt-lg-4">
                          <div className="mb-4">
                              <div>
                                  Address
                              </div>
                              <div className="display-6 fw-semibold">
                                  123 Mountain View, California, United States
                              </div>
                          </div>
                          <div className="mb-4">
                              <div>
                                  Phone
                              </div>
                              <div className="display-6 fw-semibold">
                                  +1 123-456-789
                              </div>
                          </div>
                          <div className="mb-4">
                              <div>
                                  Email
                              </div>
                              <div className="display-6 fw-semibold text-break">
                                  <a className="text-link text-white text-decoration-none" href="mailto:samplemail@mail.com">note@death.com</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default ContactScreen;