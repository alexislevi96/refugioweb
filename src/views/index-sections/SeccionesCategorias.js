import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";

export default function SeccionesCategorias() {
  return (
    <div className="cont-large">
      <div className="cont-large-back"/>
      <Container>
        <Row>
          <Col lg="8" md="12" sm="12">
            <Row>
              <Col>
                <img className="cont-large-img cont-large-img-1" src={require("assets/img/silla2.jpg")}/><div className="cont-large-img-etiqueta">MUEBLES</div>
              </Col>
              <Col>
                <img className="cont-large-img cont-large-img-2" src={require("assets/img/example2.jpg")}/><div className="cont-large-img-etiqueta">HERRERIA</div>
              </Col>
              <Col>
                <img className="cont-large-img cont-large-img-3" src={require("assets/img/example3.jpg")}/><div className="cont-large-img-etiqueta">CARTELES</div>
              </Col>
            </Row>
          </Col>
          <Col lg="4" md="12" sm="12">
            <h1 className="cont-large-titulo">CATEGORIAS PARA TUS DISEÑOS</h1>
          </Col>
        </Row> 
      </Container>
    </div>
  )
}
