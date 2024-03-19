// About.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg'; // Make sure the path is correct relative to this file

const About = () => {
  return (
    <Container>
      {/* Banner Photo */}
      <Row className="my-4">
        <Col>
          <Image src={banner} alt="Banner" fluid />
        </Col>
      </Row>

      {/* About Me Section */}
      <Row className="my-4">
        <Col>
          <h1>About Me</h1>
          <p>
            This section will contain information about my background, experience, and interests.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
