import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Platform from "./componets.jsx/Platform";
import Approch from "./componets.jsx/Approch";
import Hero from "./componets.jsx/Hero";
import ServiceSell from "./componets.jsx/ServiceSell";
import Deals from "./componets.jsx/Deals";
import Review from "./componets.jsx/Review";
import Demo from "./componets.jsx/Demo";
import GetStarted from "./componets.jsx/GetStarted";
import Target from "./componets.jsx/Target";
import Footer from "./componets.jsx/Footer";
import Loader from "./componets.jsx/Loader";
import BackTop from "./componets.jsx/Backtotop";

function App() {
  return (
    <>
      <Loader />
      <BackTop />
      <div className=" overflow-hidden py-md-3 py-2 px-2">
        <Hero />
        <ServiceSell />
        <Demo />
        <Platform />
        <Approch />
        <Deals />
        <GetStarted />
        <Review />
        <Target />
        <Footer />
      </div>
    </>
  );
}

export default App;
