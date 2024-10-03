import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='section footer bg-dark text-white'>
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h6>Company Information</h6>
            <hr />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.repellat non accusamus voluptates odit cumque! Saepe ex repellendus neque totam, voluptate accusantium excepturi perspiciatis nam rem nemo natus, aspernatur!</p>
          </div>

          <div className="col-md-3">
            <h6>Quick Links</h6>
            <hr />
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            <div><Link to="/blog">Blog</Link></div>
          </div>

          <div className="col-md-6">
            <h6>Contact Information</h6>
            <hr />
            <div className="d-flex justify-content-between">
              <div>
                <h4>India Office</h4>
                <p>Hinjwadi-Phase-2, Pune Maharashtra - 456789, India</p>
                <p>Phone: +91 7845128956</p>
                <p>Email: pktech07@gmail.com</p>
              </div>
              <div>
                <h4>UAE Office</h4>
                <p>Block C, Handan Award Complex Plot No.388, P.O.Box - 7998</p>
                <p>Phone: +971-45-1234567</p>
                <p>Email: pktech45@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
