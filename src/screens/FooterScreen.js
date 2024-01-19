import React from 'react';
import logo from '../assets/images/logo.jpg'

const FooterScreen = () => {
  return (
    <div>
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
        <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
            <img src={logo} style={{ width: '400px', height: '150px', objectFit: 'cover' }} className="img-fluid" alt="Death Note" />
            <p className="pr-5 text-white-50">Being alone is better than being with the wrong person </p>
            <p><a><i className="fa fa-facebook-square mr-1"></i></a><a><i className="fa fa-linkedin-square"></i></a></p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                <ul className="m-0 p-0">
                <li>- <a>Death is Equal</a></li>
                <li>- <a>Nam mauris velit</a></li>
                <li>- <a>Etiam vitae mauris</a></li>
                <li>- <a>Fusce scelerisque</a></li>
                <li>- <a>Sed faucibus</a></li>
                <li>- <a>Mauris efficitur nulla</a></li>
                </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
            <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col copyright text-center">
            <p className=""><small className="text-white-50">© 2024. All Rights Reserved.</small></p>
            </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default FooterScreen;