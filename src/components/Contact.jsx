import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';
import githubLogo from '../assets/images/githublogo.png';
import linkedinLogo from '../assets/images/linkedinlogo.png';
import spotifyLogo from '../assets/images/spotifylogo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '10px', textAlign: 'center', marginTop: 'auto' }}>
      <p>Connect with me:</p>
      <div>
        <Button variant="link" href="https://github.com/nrasch86" target="_blank" rel="noopener noreferrer">
          <Image src={githubLogo} alt="GitHub" style={{ width: '30px' }} />
        </Button>
        <Button variant="link" href="https://www.linkedin.com/in/nicholas-rasch-b1a6102b7/" target="_blank" rel="noopener noreferrer">
          <Image src={linkedinLogo} alt="LinkedIn" style={{ width: '30px' }} />
        </Button>
        <Button variant="link" href="https://open.spotify.com/user/nicholas.rasch?si=jjGkEVSNQzev1n0IYZBNZg" target="_blank" rel="noopener noreferrer">
          <Image src={spotifyLogo} alt="Spotify" style={{ width: '30px' }} />
        </Button>
      </div>
    </footer>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thanks for reaching out! I look forward to connecting!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container fluid>
        <Row className="my-4">
          <Col>
            <Image src={banner} alt="Contact Banner" className="banner-image" />
          </Col>
        </Row>
      </Container>
      
      <Container style={{ flex: 1 }}>
        <Row className="my-4 justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>

              <Button variant="primary" type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
};

export default Contact;
