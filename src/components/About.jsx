// About.jsx

import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg'; // Make sure the path is correct relative to this file

const About = () => {
  return (
    <Container fluid> {/* Container is now fluid */}
      {/* Banner Photo */}
      <Row className="my-4">
        <Col>
          <Image src={banner} alt="About Banner" className="banner-image" />
        </Col>
      </Row>

      {/* About Me Section */}
      <Row className="my-4 justify-content-center">
        <Col md={8}>
          <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
            <Card.Body>
            <Card.Title className="text-center" style={{ color: 'red', fontSize: '3rem' }}>About Me</Card.Title>
              <Card.Text style={{ fontSize: '1.5rem'}}>
                Originally from the Outer Banks, I recently attended Arizona State University in pursuit of a career in marketing. Proceeding my time spent as a Sun Devil, I decided to change career paths towards web development.
                This decision lead me in the direction of Columbia University where I have completed my studies as a full stack developer. I enjoy the puzzle-like workflow associated with my new career path and am eager to take on new projects and ideas.
                I am very interested in the current direction that artificial intelligence is moving towards and am eager to develop within its scope in the near future!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
