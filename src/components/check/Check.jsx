import React from "react";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

const Check = ({ right, data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-t border-b border-light-grey-border my-7 lg:my-10 py-5 lg:py-10 ">
      <div className="flex items-center font-baskervville">
        <div className="flex-1 flex justify-center items-start md:items-center">
          <h4
            data-aos="fade-right"
            className="font-['Baskervville'] text-2xl lg:text-5xl text-fade-grey lg:leading-tight font-normal w-full md:w-auto"
          >
            Check out my <br />
            cool <span className="italic text-black-text">projects</span>
          </h4>
        </div>

        <div data-aos="fade-left" className="flex-1 flex justify-end items-end">
          {right ? (
            <span
              onClick={scrollToTop}
              className="cursor-pointer text-lg font-normal hover:text-[#C76911]"
            >
              Back to Top
            </span>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 lg:gap-3 font-sans cursor-pointer text-sm lg:text-xl font-normal text-[#C76911]"
            >
              <span className="">View Projects</span>
              <LuMoveRight />
            </Link>
          )}
        </div>
      </div>

      {data?.length && (
        <div className="mt-10 mb-5 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5">
          {data.map(({ preview, id, name, subname }) => (
            <Link
              key={id}
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #CCFAD3 0%, #F9D889 47.34%, #F89180 100%)",
              }}
              className="flex-1 relative h-[450px] md:h-[600px] 2xl:h-[830px] rounded-2xl md:rounded-[30px] overflow-hidden"
              to={`/details/${id}`}
            >
              <div className="p-5 md:p-10">
                <div className="flex flex-col gap-1 lg:gap-2">
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
      )}
    </div>
  );
};

export default Check;
