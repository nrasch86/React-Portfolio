// Resume.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';

const Resume = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Image src={banner} alt="Resume Banner" fluid />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h1>Resume</h1>
          <p>Download my resume or view it below.</p>
          {/* You can add your resume or a link to download it here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
