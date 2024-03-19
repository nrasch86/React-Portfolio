// Home.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';
import profilePic from '../assets/images/profile.jpg';
import '../index.css'; 

const Home = () => {
  return (
    <div className="home-background"> {/* Apply the background image to the whole page */}
      <Container className="home-content"> {/* Apply the content styling */}
        {/* Banner Photo */}
        <Row className="my-4">
          <Col>
            <Image className="banner-image" src={banner} alt="Banner" fluid />
          </Col>
        </Row>

        {/* Profile Photo and About Me Section */}
        <Row className="my-4 align-items-center home-content-background"> {/* Apply the semi-transparent background */}
          <Col xs={12} md={4} className="text-center">
            <Image className="profile-image" src={profilePic} alt="Profile" roundedCircle fluid />
          </Col>
          <Col xs={12} md={8}>
            <h2>Hello!</h2>
            <p>
              Hello! 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
