import React from 'react';
import './projects.css';
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//logos
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SPRING from "../../assets/img/skills/springboot.svg";
import L_HIBERNATE from "../../assets/img/skills/hibernate.svg";
import L_ANGULAR from "../../assets/img/skills/angular.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";

function projects() {
    return (
            <div id="Projects">
      <h1 className="pt-3 text-center text-dark font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        <ImageEvent
            date="01/10/2019"
            className="text-center"
            text="EmployeePortal"
           
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Employee Portal Project which has functionalities to maintain employees
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add,Delete,Update Employess and Payment related tasks</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANGULAR}
                                alt="Angular"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Angular 8
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SPRING}
                                alt="Angular"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             SpringBoot
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HIBERNATE}
                                alt="Angular"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             Hibernate
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="Angular"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             MYSQL
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>



<ImageEvent
            date="02/04/2020"
            className="text-center"
            text="SLP DATA ANALYTICS"
          
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This Project is Used to Maintain Client Data
                        
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Maintain User's Data</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANGULAR}
                                alt="Angular"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             Angular
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SPRING}
                                alt="Spring Boot"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             Spring Boot
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             MYSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HIBERNATE}
                                alt="Hibernate"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Hibernate
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                             MYSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
        </div>
    )
}

export default projects
