// Portfolio.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';

const Portfolio = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Image src={banner} alt="Portfolio Banner" fluid />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h1>Portfolio</h1>
          <p>Here is some of my recent work.</p>
          {/* You can add your portfolio items here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
