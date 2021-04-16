import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";

export default function BienvenidaCartel() {
  return (
    <div className="cont-bien">
      <div className="cont-bien-back"/>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <img className="cont-bien-img-1 shadow" src={require("assets/img/lamparas7.jpg")}/>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Row>
              <Col lg="12" md="12" sm="12">
                <img className="cont-bien-img-2 shadow" src={require("assets/img/lamparas4.jpg")}/>
              </Col>
              <Col lg="12" md="12" sm="12">
                <div className="cont-bien-text">
                  <h4>DISEÑO MINIMALISTA</h4>
                  <p>El término minimalista, se refiere a todo aquello que se haya despojado de los excesos, dejando sólo lo esencial. El diseño minimalista, es una muestra de esto, imagina que es el diseño en su forma más básica. Se distingue por sus elementos ligeros, colores, formas y texturas. </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row> 
      </Container>
    </div>
  )
}
