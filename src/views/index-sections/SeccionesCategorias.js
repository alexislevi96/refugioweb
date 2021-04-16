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
              <Col className="col-category">
                  <img className="cont-large-img cont-large-img-1" src={require("assets/img/espejo4.jpg")}/>
                <div className="cont-large-img-etiqueta ">MUEBLES</div>
                <div className="cont-large-text">
                  <h1>CONOCE A NUESTROS DISEÑADORES</h1>
                  <p>Conoce a los talentosos diseñadores detrás de los muebles modernos de BoConcept y lee las historias de los icónicos diseños de butacas, sofás con estilo y sistemas de pared flexibles</p> 
                  <a className="animated-arrow" href="/">
                    <span className="the-arrow -left">
                      <span className="shaft"></span>
                    </span>
                    <span className="main">
                      <span className="text">
                        Ver mas
                      </span>
                      <span className="the-arrow -right">
                        <span className="shaft"></span>
                      </span>
                    </span>
                  </a>
                </div>
              </Col>
              <Col className="col-category">
                <img className="cont-large-img cont-large-img-2" src={require("assets/img/lamparas6.jpg")}/>
                <div className="cont-large-img-etiqueta">HERRERIA</div>
                <div className="cont-large-text">
                  <h1>NUEVA COLECCIÓN</h1>
                  <p>Explora noticias interesantes sobre productos nuevos, actualizaciones de productos destacados y el lookbook con todas las tendencias para 2021</p> 
                  <a className="animated-arrow" href="/">
                    <span className="the-arrow -left">
                      <span className="shaft"></span>
                    </span>
                    <span className="main">
                      <span className="text">
                        Ver mas
                      </span>
                      <span className="the-arrow -right">
                        <span className="shaft"></span>
                      </span>
                    </span>
                  </a>
                </div>
              </Col>
              <Col className="col-category">
                <img className="cont-large-img cont-large-img-3" src={require("assets/img/cartel2.jpg")}/>
                <div className="cont-large-img-etiqueta">CARTELES</div>
                <div className="cont-large-text">
                  <h1>AGREGANDO ESTILO EN SINGAPUR</h1>
                  <p>Elegante, individual, cálido y fácil. Estos fueron los cuatro deseos clave cuando Raquel e Hisamizu se propusieron diseñar su nuevo departamento vacío en Singapur.</p> 
                  <a className="animated-arrow" href="/">
                    <span className="the-arrow -left">
                      <span className="shaft"></span>
                    </span>
                    <span className="main">
                      <span className="text">
                        Ver mas
                      </span>
                      <span className="the-arrow -right">
                        <span className="shaft"></span>
                      </span>
                    </span>
                  </a>
                </div>
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
