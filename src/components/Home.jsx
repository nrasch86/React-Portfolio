// Home.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';
import profilePic from '../assets/images/profile.jpg';

const Home = () => {
  return (
    <>
      <Container fluid> 
        {/* Banner Photo */}
        <Row className="my-4">
          <Col>
            <Image src={banner} alt="Home Banner" className="banner-image" />
          </Col>
        </Row>
      </Container>

      <Container> 
        {/* Profile Photo and About Me Section */}
        <Row className="my-4 align-items-center">
          <Col xs={12} md={4} className="text-center">
            <Image className="profile-image" src={profilePic} alt="Profile" roundedCircle fluid />
          </Col>
          <Col xs={12} md={8} className="content-background">
            <h2>Hello!</h2>
            <p>
              I'm Nikki, a junior software developer from Atlanta.
                I began my journey within tech by completing my certifications through Columbia University.
                I quickly fell in love with my work and utilize my newely aquired skills for personal projects as well as freelance work.
                 Thank you for visiting my site and feel free to reach out to me via my contact page!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
