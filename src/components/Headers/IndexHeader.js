/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bar3.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img> */}
            <i class="far fa-sword"></i>
            <h1 className="h1-seo">Bienvenidos</h1>
            <h3>Hacemos de tu diseño una realidad.</h3>
          </div>
          {/* <h6 className="category category-absolute">
            Designed by REFUGIO corp.
          </h6> */}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
