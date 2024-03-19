// Contact.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banner from '../assets/images/banner.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      {/* Banner Image */}
      <Row className="my-4">
        <Col>
          <Image src={banner} alt="Contact Banner" fluid />
        </Col>
      </Row>

      {/* Contact Form */}
      <Row className="my-4">
        <Col xs={12}>
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Send</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
