import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";

export default function Portones() {
  const divStyle = {
    paddingRight: '0px',
    marginRight: '0px',
  };
  return (
    <div  className="cont-portones">
      <div className="cont-portones-back-2"/>
      <div className="cont-portones-back"/>
      <Row style={divStyle}>
        <Col lg="8" md="8" sm="12">
        <img className="cont-portones-img" src={require("assets/img/porton4.jpg")}/>
        </Col>
        <Col lg="4" md="4" sm="12" >
          <div className="cont-portones-text">
            <h2>TU VERSIÓN PERFECTA</h2>
            <p>El término minimalista, se refiere a todo aquello que se haya despojado de los excesos, dejando sólo lo esencial. El diseño minimalista, es una muestra de esto, imagina que es el diseño en su forma más básica. El diseño minimalista, es una muestra de esto, imagina que es el diseño en su forma más básica. El diseño minimalista, es una muestra de esto, imagina que es el diseño en su forma más básica. </p>

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
    </div>
  )
}
