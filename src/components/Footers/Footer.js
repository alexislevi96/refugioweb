import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <div className="cont-footer">
      <div className="cont-footer-back"/>
      <div className="cont-footer-back-2"/>
      <div className="cont-footer-all">
        <Row style={{marginRight: '0px'}} >
          <Col lg="6" md="6" sm="6" xs="6" >
            <p className="cont-footer-contact">
              Email: info.refugiodesign@gmail.com <br />
              Direccion: Remedios de Escalada 144<br/>(Córdoba, Argentina) <br />
              Tel: 0351-4232972 / 0351-4239991
            </p>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6" >
            <p className="cont-footer-contact-2">
              Podes buscarnos tambien en: <br />
              <div className="cont-footer-contact-2-i">
                <a href="">
                  <i className="fab fa-facebook-square "/>
                </a>
                <a href="">
                  <i className="fab fa-instagram "></i>
                </a>
              </div>
            </p>
          </Col>
        </Row> 
      </div>
      
      <p className="cont-footer-term ">© 2021 RefugioDesign, Inc. · Privacy · Terms</p>
    </div>
  )
}
