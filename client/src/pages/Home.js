import React from "react";
import Hero from "../components/Banner";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://cdn.pixabay.com/photo/2016/07/31/16/24/banner-1559400_960_720.jpg">
        <h1>Google Book Search!</h1>
        <h2>Find the book of your dreams...</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Google Books Search Engine!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Choose from the navigation bar to either search for a book or look
              at the list of books you have saved!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
