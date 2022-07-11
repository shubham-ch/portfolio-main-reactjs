import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import urlkeeper from "../../Assets/Projects/urlkeeper.png";
import database from "../../Assets/Projects/database.png";
import overlay from "../../Assets/Projects/overlay.png";
import physicshw from "../../Assets/Projects/physicshw.jpg";
import travelbuddy from "../../Assets/Projects/travelbuddy.jpg";
import coronaapp from "../../Assets/Projects/coronaapp.png";
import wcs from "../../Assets/Projects/wcs.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlkeeper}
              isBlog={false}
              title="URL keeper"
              description="This is a javascript extension for browsers which helps to store urls for the user. The user can add and delete the url directly from browser with one click through the extension."
              ghLink="https://github.com/shubham-ch/JS-projects/tree/master/chrome-extension"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wcs}
              isBlog={false}
              title="Queries from rasdaman in VR/AR app"
              description="An app in Virtual Reality which uses a n-dimensional array called rasdaman as a data source to extract various images of earth and let the user interact with the objects through a VR device."
              ghLink="https://github.com/shubham-ch/wcs-wcps-wms-rasdamanVR"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={overlay}
              isBlog={false}
              title="Overlay VR/AR app using rasdaman"
              description="An app in unity designed using mapbox api. This uses a Globe as a base where the data is extracted from rasdaman (a n-dimensional array) and overlay image on a particular langitude and latitude."
              ghLink="https://github.com/shubham-ch/overlay-rasdamanVR"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coronaapp}
              isBlog={false}
              title="Corona app"
              description="This app stores the data from user and helps people to warn if an infected person is near them. It is built with flask. This app also stores hospital and agent data where hospitals can add data for infected people."
              ghLink="https://github.com/shubham-ch/corona-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="Database for museum"
              description="The funcionality of this backend system is to supply data to the various frontends like Augmented Reality devices, Virtual Reality devices, monitors e.t.c in a high-tech hybrid museum."
              ghLink="https://github.com/shubham-ch/museum-backend"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={physicshw}
              isBlog={false}
              title="Homework Predictor"
              description="In my university 'Jacobs University' there are students from more than 110 nationalities and not everyone have the same education background. So, this app will help professors predict the homeworks appropriate for a certain student."
              ghLink="https://github.com/shubham-ch/jacobs-physicsDB-project"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelbuddy}
              isBlog={false}
              title="travel buddy"
              description="Travelling alone and want a travel buddy at some point of time during the travel. This is the app. It helps matching like minded and people having same interests for travelling together."
              ghLink="https://github.com/enismustafaj/travel-buddy"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
