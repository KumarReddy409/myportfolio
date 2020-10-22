import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilepic from '../../assets/img/profilepic/myimage.jpg';
import './about.css';
import Button from "react-bootstrap/Button";


function about() {
    return (
        <div>
            <div className="about">
            <h1 className="text-center pt-3 pb-3">About Me</h1>
            <Container>
                <Row className="align-items-center pt-3 pb-5">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                        <Image className="profile justify-content-end" alt="profile" src={profilepic} thumbnail fluid  />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                           {/* description */}
                           Hi there! I am <strong>&nbsp;Kumar Reddy</strong>
                <br />A passionate programmer  born and brought up in India. I am a Full Stack Java Developer with Angular,Java,Spring Boot as my tech stack.
                <br />
                In 2019, I successfully completed my Engineering with specialization in 'Electronics and Communication'.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I will praticipate in compitations to slove programs
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                    
                    {/* Links */}
                    <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1ACRKtKCilDM5yQuWr9yliqABFpj6JA2n/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/KumarReddy409" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/kumar-reddy-33a20516a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>


                        </Row>
                       
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default about
