import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <AboutPage />
          <ProjectPage />
          <SkillsPage />
          <ContactPage />
          <Footer />
          <Social />
        </>
      )}
    </>
  );
}

export default App;
