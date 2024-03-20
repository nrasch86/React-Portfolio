// Contact.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';

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
    <>
      <Container fluid>
        <Row className="my-4">
          <Col>
            <Image src={banner} alt="Contact Banner" className="banner-image" />
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row className="my-4 justify-content-center">
          <Col xs={12} md={8} lg={6}> {/* Adjust the column sizes as needed for better spacing */}
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
    </>
  );
};

export default Contact;
