import { BrowserRouter } from "react-router-dom";
import {
  About,
  Works,
  Tech,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Contact,
  StarsCanvas,
} from "./components";
import Preloader from "./components/Preloader";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-50">
        <Preloader />
      </div>
      <div className="relative z-0 bg-[#9A9E9F]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


// https://www.buymeacoffee.com/invite/Dhruv1611