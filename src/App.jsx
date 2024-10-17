import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Models, Navbar, Tech, Works, StarsCanvas, Footer, Allworks, Allmodels } from "./components";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar /> 
        <Routes>
          
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <Works />
              <Models />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
              
            </>
          } />

          
          <Route path="/project-details" element={<ProjectDetails />} />

          <Route path="/allworks" element={<Allworks />} />
          <Route path="/allmodels" element={<Allmodels />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
