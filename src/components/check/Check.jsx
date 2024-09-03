import React from "react";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

const Check = ({ right, data }) => {
  return (
    <div className="border-t border-b border-light-grey-border my-7 lg:my-10 py-5 lg:py-10 ">
      <div className="flex items-center font-baskervville">
        <div className="flex-1 flex justify-center items-start md:items-center">
          <h4 className="font-['Baskervville'] text-2xl lg:text-5xl text-fade-grey lg:leading-tight font-normal w-full md:w-auto">
            Check out my <br />
            cool <span className="italic text-black-text">projects</span>
          </h4>
        </div>

        <div className="flex-1 flex justify-end items-end">
          {right ? (
            <span className="cursor-pointer text-lg font-normal">
              Back to Top
            </span>
          ) : (
            <Link
              to="/projects"
              className="flex items-center gap-2 lg:gap-3 font-sans cursor-pointer text-sm lg:text-xl font-normal text-[#C76911]"
            >
              <sapn className="">View Projects</sapn>
              <LuMoveRight />
            </Link>
          )}
        </div>
      </div>

      {data.length && (
        <div className="mt-10 flex flex-col md:flex-row items-center gap-5 lg:gap-10 justify-between">
          {data.map(({ preview, id }) => (
            <div key={id} className="flex-1 w-full ">
              <img
                src={require(`../../assets/${preview}.png`)}
                alt="detail"
                className="w-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Check;
