// Resume.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';

const Resume = () => {
  return (
    <>
      <Container fluid> 
        <Row className="my-4">
          <Col>
            <Image src={banner} alt="Resume Banner" className="banner-image" />
          </Col>
        </Row>
      </Container>
      
      <Container> 
        <Row className="my-4">
          <Col>
            <h1>Resume</h1>
            <p>
              Download my resume or view it below.
              {/*Resume Download Link */}
            </p>
            {/* Example: Add a button or link to download the resume */}
            <a href="path_to_your_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download Resume
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
