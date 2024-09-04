import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Check from "../../components/check/Check";
import data from "../../assets/data.json";

const Projects = () => {
  return (
    <div className="">
      <NavBar />

      <div className="px-4 md:px-10 mb-32 md:mb-60">
        <div className="md:pl-20 lg:px-32 mt-12 md:mt-24 lg:mt-48 text-2xl md:text-5xl font-normal md:leading-tight font-baskervville text-fade-grey">
          <h2>
            Hi I’m <span className="text-black-text italic">Doris.</span> I
            thrive on blending design with creativity to elevate ordinary
            moments into unforgettable experiences.
          </h2>
        </div>

        <div className="my-10 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
          {data.map(({ preview, id }) => (
            <Link key={id} className="flex-1" to={`/details/${id}`}>
              <img
                src={require(`../../assets/${preview}.png`)}
                alt="preview-img"
                className="w-full"
              />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
