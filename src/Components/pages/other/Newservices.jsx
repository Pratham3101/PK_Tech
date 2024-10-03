import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Newservices = styled.section`
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
    color:#CC0A12;
  }

  .services {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .service {
    flex: 1 1 300px;
    margin: 20px;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
  }

  .service h3 {
    margin-top: 20px;
    font-size: 24px;
  }

  .service p {
    font-size: 19.2px;
  }

  .icon {
    font-size: 48px;
    color: #333;
  }

  .read-more {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    display: block;
    margin-top: 10px;
  }
`;

const Services = () => (
  <Newservices id="services">
    <h2>Our Services</h2>
    <div className="services">
      <div className="service">
        <FaLaptopCode className="icon" />
        <h3>Web Development</h3>
        <p>We build responsive and robust web applications.</p>
        <Link to="/services" className="read-more">Read More</Link>
      </div>
      <div className="service">
        <FaMobileAlt className="icon" />
        <h3>Mobile Development</h3>
        <p>We create mobile apps that are user-friendly and performant.</p>
        <Link to="/services" className="read-more">Read More</Link>
      </div>
      <div className="service">
        <FaDatabase className="icon" />
        <h3>Data Analysis</h3>
        <p>We offer data analysis services to help you make informed decisions.</p>
        <Link to="/services" className="read-more">Read More</Link>
      </div>
    </div>
  </Newservices>
);

export default Services;
