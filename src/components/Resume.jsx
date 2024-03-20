// Resume.jsx

import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';
const resumePdf = '../assets/docs/Resume.pdf';

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
              I greatly appreciate you taking the time to view my portfolio and learn a bit about me! Please feel free to view or download my resume, below!
            </p>
            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Download Resume
            </a>
          </Col>
        </Row>

        {/* Skills Card Section */}
        <Row className="my-4 justify-content-center">
          <Col md={8}>
            <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
              <Card.Body>
                <Card.Title className="text-center" style={{ color: 'red', fontSize: '2rem' }}>Skills & Languages</Card.Title>
                <Card.Text style={{ fontSize: '1.25rem' }}>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
