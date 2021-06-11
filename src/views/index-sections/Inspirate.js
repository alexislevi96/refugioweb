import React, {useEffect} from 'react'
import { Button, Container, Row, Col } from "reactstrap";
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Inspirate() {
  const divStyle = {
    paddingRight: '0px',
    marginRight: '0px',
  };
  useEffect(() => {
    Aos.init({});
  }, [])
  return (
    <div className="cont-inspirate">
      <div className="cont-inspirate-back"/>
      <Row style={divStyle}>
        <Col lg="7" md="7" sm="12">
          <Row>
            <Col 
            lg={{ span: 12, order: 1 }} 
            md={{ span: 12, order: 1 }}
            sm={{ span: 6, order: 2 }} 
            xs={{ span: 6, order: 2 }}
            >
              <div className="img-hover-zoom" 
              data-aos="fade-up"
              // data-aos-anchor-placement="bottom-center"
              data-aos-duration="1000">
                <img className="cont-inspirate-img-1 " src={require("assets/img/bar1.jpg")}/>
              </div>
            </Col> 
            <Col 
            lg={{ span: 12, order: 2 }} 
            md={{ span: 12, order: 2 }}
            sm={{ span: 6, order: 1 }} 
            xs={{ span: 6, order: 1 }}
            >
              <div className="cont-inspirate-text-first">
                <h4
                data-aos="fade-up"
                // data-aos-anchor-placement="bottom-center"
                data-aos-duration="2500">DISEÑO AZULISTA</h4>
                <p
                data-aos="fade-up"
                // data-aos-anchor-placement="bottom-center"
                data-aos-duration="3000"
                >El término minimalista, se refiere a todo aquello que se haya despojado de los excesos, dejando sólo lo esencial. El diseño minimalista, es una muestra de esto, imagina que es el diseño en su forma más básica. </p>
                <a 
                data-aos="fade-up"
                // data-aos-anchor-placement="bottom-center"
                data-aos-duration="3000"
                className="animated-arrow" href="/">
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
        <Col lg="5" md="5" sm="12" >
          <Row>
            <Col lg="12" md="12" sm="6" xs="6" style={divStyle}>
              <div className="img-hover-zoom" 
              data-aos="fade-up"
              // data-aos-anchor-placement="bottom-center"
              data-aos-duration="1500"> 
                <img className="cont-inspirate-img-2" src={require("assets/img/lamparas3.jpg")}/>
              </div>
            </Col>
            <Col lg="12" md="12" sm="6" xs="6" >
              <div className="cont-inspirate-text" >
                <h4 
                data-aos="fade-up"
                // data-aos-anchor-placement="bottom-center"
                data-aos-duration="2500"
                >DISEÑO MINIMALISTA</h4>
                <p
                data-aos="fade-up"
                // data-aos-anchor-placement="bottom-center"
                data-aos-duration="3000"
                >El término minimalista, se refiere a todo aquello que se haya despojado de los excesos, dejando sólo lo esencial. El diseño minimalista, es una muestra de esto, imagina que es el diseño en su forma más básica. Se distingue por sus elementos ligeros, colores, formas y texturas. </p>
                <a 
                data-aos="fade-up"
                // data-aos-anchor-placement="bottom-center"
                data-aos-duration="3000"
                className="animated-arrow" href="/">
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
      </Row> 
    </div>
  )
}
