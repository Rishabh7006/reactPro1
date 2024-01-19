import React from 'react';
import slide1 from '../assets/images/slide7.jpg'
import slide2 from '../assets/images/img4.png'
import slide3 from '../assets/images/slide7.jpg'

const Carousel = () => {
  return (
    <div className='p-3 m-0 border-0 bd-example m-0 border-0'>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide1}
              className="d-block w-100"
              alt="focaccia"
              style={{ width: '500px', height: '300px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Death Note</h5>
              <p>Sometimes, the questions are complicated – and the answers are simple.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" style={{ width: '500px', height: '300px', objectFit: 'cover' }} alt="margherita" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Death Note</h5>
              <p>Learn to treasure your lifes since it can be taken away from you anytime.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" style={{ width: '500px', height: '300px', objectFit: 'cover' }} alt="spinaci" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Death Note</h5>
              <p>Irrespective of how gifted you are… You cannot change the world alone.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;