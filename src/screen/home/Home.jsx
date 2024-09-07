import React, { useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
