import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/apple.png";
import projImg2 from "../assets/img/html-css.jpeg";
import projImg3 from "../assets/img/c++.png";
import projImg4 from "../assets/img/java-spring-boot.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Handcraft-Marketplace",
      description: "Developed and launched a fully functional iOS application using Swift and Parse, features secure login system that retains user credentials, integrated item post generation, favoriting, and sharing.",
      imgUrl: projImg1,
      linkURL: "https://github.com/bocar90/CodePath-Final-Project"
    },
    {
      title: "GottaGo",
      description: "Built a Web-Application that allows people who travel in similar directions to connect and ride together. Implemented the software’s functionalities using JAVASCRIPT, HTML, CSS, BOOTSTRAP and PHP. Designed and implemented a database using GUI to store the user’s information and then using data to match users",
      imgUrl: projImg2,
      linkURL: "https://github.com/bocar90/CSC-225-Project-2"
    },
    {
      title: "Vi Editor Replica",
      description: "Worked in a team of three and used C++ and Data Structures such as Lists, Stacks, Queues, and Trees to successfully build the editor. Developed functionalities such as positioning in the document, deleting, inserting characters/words, undo, redo.",
      imgUrl: projImg3,
      linkURL: "https://github.com/bocar90/CSC-225-Project-2"
    },
    {
      title: "thymeleafformdemo",
      description: "Built Spring boot application that allows users to create an account, sign in, add a project and display all projects in a table format.",
      imgUrl: projImg4,
      linkURL: "https://github.com/bocar90/Per-Scholas/tree/main/thymeleafformdemo"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out my latest projects!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
