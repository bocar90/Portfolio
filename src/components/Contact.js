
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/sending_email_animation.gif';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const sendEmail = () => {
  window.location.href = 'mailto:bocarsock5@gmail.com';
};
export const Contact = () => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <button type="button" className="bubble-button" onClick={sendEmail}>
                    Email me
                    <i className="fas fa-envelope"></i>
                  </button>
                     
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
