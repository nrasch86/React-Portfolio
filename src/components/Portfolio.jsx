// Portfolio.jsx

import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';
import project1Image from '../assets/images/project1concertcompass.jpg'; 
import project2Image from '../assets/images/project2svggenerator.jpg';
import project3Image from '../assets/images/project3notetaker.jpg';
import project4Image from '../assets/images/project4weatherapp.jpg';
import project5Image from '../assets/images/project5schedulingapp.jpg';
import project6Image from '../assets/images/project6passwordgenerator.jpg';


const projects = [
  {
    id: 1,
    title: 'Concert Compass',
    description: 'Event Ticketing App',
    imageUrl: project1Image, 
    url: 'https://github.com/bladeasf/Concert-Compass'
  },
  {
    id: 2,
    title: 'SVG Generator',
    description: 'CLI Application used to generate SVG Logos',
    imageUrl: project2Image,
    url: 'https://github.com/nrasch86/SVG_Generator'
  },
  {
    id: 3,
    title: 'Note Taker',
    description: 'Note taking web app',
    imageUrl: project3Image,
    url: 'https://github.com/nrasch86/NoteApp3'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Weather tracking web app',
    imageUrl: project4Image,
    url: 'https://github.com/nrasch86/WeatherDashboard'
  },
  {
    id: 5,
    title: 'Scheduling App',
    description: 'Scheduling tool web app',
    imageUrl: project5Image,
    url: 'https://github.com/nrasch86/SchedulingApp'
  },
  {
    id: 6,
    title: 'Password Generator',
    description: 'Password generator web app',
    imageUrl: project6Image,
    url: 'https://github.com/nrasch86/PasswordGenerator'
  }
];

const Portfolio = () => {
    return (
      <>
        <Container fluid> 
          <Row className="my-4">
            <Col>
              <Image src={banner} alt="Portfolio Banner" className="banner-image" />
            </Col>
          </Row>
        </Container>
        
        <Container> 
          <Row className="my-4">
            <Col>
              <h1>Portfolio</h1>
              <p>Feel free to browse some of my recent projects!</p>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4 mb-5">
            {projects.map((project) => (
              <Col key={project.id} className="d-flex align-items-stretch">
                <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }} className="w-100">
                  <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                      {project.description}
                    </Card.Text>
                    <Button variant="primary" href={project.url} target="_blank" className="mt-auto">View Project</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  };
  
  export default Portfolio;
