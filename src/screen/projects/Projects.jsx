import React, { useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { Link, useLocation } from "react-router-dom";
import data from "../../assets/data.json";

const Projects = () => {
  const { pathname } = useLocation();
  const fade = ["fade-right", "fade-left", "fade-right", "fade-left"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="">
      <NavBar />
      <div className="px-4 md:px-10 mb-32 md:mb-60">
        <div
          data-aos="fade-up"
          className="w-[95%] md:w-[85%] lg:w-[95%] 2xl:w-[80%] md:pl-20 lg:px-32 mt-12 md:mt-24 lg:mt-48 text-2xl md:text-5xl font-normal md:leading-tight font-baskervville text-fade-grey"
        >
          <h2>
            Hi I’m <span className="text-black-text italic">Doris.</span> I
            thrive on blending design with creativity to elevate ordinary
            moments into unforgettable experiences.
          </h2>
        </div>

        <div className="my-10 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5">
          {data.map(({ preview, id, name, subname }, i) => (
            <Link
              key={id}
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #CCFAD3 0%, #F9D889 47.34%, #F89180 100%)",
              }}
              data-aos={fade[i]}
              className="flex-1 relative h-[450px] md:h-[600px] 2xl:h-[830px] rounded-2xl md:rounded-[30px] overflow-hidden"
              to={`/details/${id}`}
            >
              <div className="p-5 md:p-10">
                <div className="flex flex-col gap-2">
                  <h6 className="font-sans text-lg md:text-2xl font-semibold text-[#0F0F0F]">
                    {name}
                  </h6>
                  <p className="font-sans text-sm md:text-base font-normal text-[#161616]">
                    {subname}
                  </p>
                </div>
              </div>

              <div className="absolute w-[80%] md:w-[65%] 2xl:w-[550px] 2xl:h-[650px] bottom-0 right-0 overflow-hidden flex justify-end items-end">
                <img
                  src={require(`../../assets/${preview}.png`)}
                  alt="preview-img"
                  className="h-[320px] md:h-[400px] 2xl:h-[600px]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
