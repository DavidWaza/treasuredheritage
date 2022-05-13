import React from "react";
import "./Blog.css";
import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="global_heroBanner blog_post_banner">
              <h1 className="global_title">BLOG</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Blog;
