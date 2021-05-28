import React from "react";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import DiseñoMinimalista from "./index-sections/DiseñoMinimalista.js";
import SeccionesCategorias from "./index-sections/SeccionesCategorias.js";
import Inspirate from "./index-sections/Inspirate.js";
import Carousel from "./index-sections/Carousel.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Espejo from "./index-sections/Espejo.js";
import Footer from "../components/Footers/Footer.js";
import SignUp from "./index-sections/SignUp.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <Inspirate/>
          <SeccionesCategorias/>
          <DiseñoMinimalista/> 
          <CompleteExamples />
          <Carousel />
          <Espejo />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
{/* <SignUp /> */}

          {/* <NucleoIcons /> */}
          {/* <Examples /> */}
          {/* <Download /> */}
          {/* <Tabs /> */}
          {/* <Pagination /> */}
          {/* <BasicElements /> */}
          {/* <Navbars /> */}
          {/* <Notifications /> */}
          {/* <Typography /> */}
          {/* <Javascript /> */}