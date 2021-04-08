import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";

function Images() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className=" section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container" >
                <img
                  alt="..."
                  src={require("assets/img/lamp1.png")}
                  style={{
                    transform: `translateY(${offset * -.2}px)`,
                  }}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/lamp2.png")}
                  style={{
                    transform: `translateY(${offset * -.3}px)`,
                  }}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/lamp3.png")}
                  style={{
                    transform: `translateY(${offset * -.16}px)`,
                  }}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
