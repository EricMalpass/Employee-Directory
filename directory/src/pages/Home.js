import React from "react";
import Row from "../componets/Row";
import Col from "../componets/Col";
import Container from "../componets/Container";
import Footer from "../componets/Footer";

function About() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To the Employee Registry!</h1>
          </Col>
        </Row>
        <Row>
            <col></col>
        </Row>
        </Container>
        <Footer></Footer>
      </div>
        );
    }
    
    export default About;