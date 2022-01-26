import React from "react";
React.useLayoutEffect = React.useEffect;
import Wellcome from "../components/Wellcome";
import Navbar from "../components/Navbar";
import Snowfall from "react-snowfall";
import ArtGallery from "../components/ArtGallery";
import RedPandas from "../components/RedPandas";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
// import config from 'react-reveal/globals';
// config({ ssrFadeout: true });

function index() {
  return (
    <div>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex:999999
        }}
      />
      <Navbar />
      <Wellcome />
      <ArtGallery />
      <RedPandas />
      <Roadmap />
      <Team />
      <FAQ />
      <Partners />
      <Footer />
    </div>
  );
}

export default index;
