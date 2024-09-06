import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import data from "../../assets/data.json";
import Check from "../../components/check/Check";

const ProjectsDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const findItem = data.find((item) => item.id === Number(id));
    setProject(findItem);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const checkData =
    Number(id) === 1
      ? [data[1], data[2]]
      : Number(id) === 2
      ? [data[2], data[3]]
      : Number(id) === 3
      ? [data[0], data[3]]
      : [data[1], data[0]];

  const renderHeder = () => {
    const textId = Number(id);

    if (textId === 2)
      return (
        <h2 className="leading-tight">
          A <span className="text-black-text italic">comprehensive </span>
          platform that provides intuitive solution for
          <span className="text-black-text italic">
            {" "}
            field data collection.
          </span>
        </h2>
      );

    if (textId === 3)
      return (
        <h2 className="leading-tight">
          A <span className="text-black-text italic">smart app </span>
          for managing finances and tracking expenses
          <span className="text-black-text italic"> anywhere </span>in the
          world.
        </h2>
      );

    if (textId === 4)
      return (
        <h2 className="leading-tight">
          An <span className="text-black-text italic">interactive </span> and{" "}
          <span className="text-black-text italic">accessible </span>e-learning
          experience that
          <span className="text-black-text italic"> empowers</span> learners.
        </h2>
      );

    return (
      <h2 className="leading-tight">
        An <span className="text-black-text italic">innovative </span>
        solution that integrates key CRM features into a
        <span className="text-black-text italic"> system platform.</span>
      </h2>
    );
  };

  return (
    <div className="">
      <NavBar />

      <div className="px-4 md:px-10 mb-20">
        <div className="lg:px-32 w-[95%] md:w-[85%] xl:w-[70%] mt-16 md:mt-20 xl:mt-32 2xl:mt-48 text-2xl md:text-3xl xl:text-5xl font-normal md:leading-tight font-baskervville text-fade-grey">
          {renderHeder()}
        </div>

        {project && (
          <div className="my-7 md:my-10 lg:my-16 w-full">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #CDF9D1 0%, #F9D889 47.34%, #F89180 100%)",
              }}
              className="flex justify-center items-center p-5 md:p-14 lg:p-24 rounded-xl lg:rounded-[30px]"
            >
              <img
                src={require(`../../assets/${project?.image}.png`)}
                alt="img"
                className=""
              />
            </div>
          </div>
        )}

        <div className="lg:px-32 my-12 text-fade-grey">
          <h5 className="text-black-text font-baskervville italic font-normal text-xl md:text-2xl">
            {project?.name}
          </h5>
          <div className="mt-5 border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Year</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <h6>{project?.year}</h6>
            </div>
          </div>

          <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Service</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <h6>{project?.service}</h6>
            </div>
          </div>

          <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>About Project</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto text-pretty">
              <h6>{project?.about}</h6>
            </div>
          </div>
        </div>

        {project && (
          <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10 justify-between">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #E9C9E8 0%, #E9A3C6 32.08%, #D271A7 47.34%, #6C3AA5 100%)",
              }}
              className="flex-1 w-full p-5 xl:p-10 rounded-xl xl:rounded-[30px]"
            >
              <img
                src={require(`../../assets/${project?.firstimg}.png`)}
                alt="detail"
                className="w-full"
              />
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(147.85deg, #E9C9E8 0%, #E9A3C6 32.08%, #D271A7 47.34%, #6C3AA5 100%)",
              }}
              className="flex-1 w-full p-5 xl:p-10 rounded-xl xl:rounded-[30px]"
            >
              <img
                src={require(`../../assets/${project?.secondimg}.png`)}
                alt="detail"
                className="w-full"
              />
            </div>
          </div>
        )}

        <div className="lg:px-32 my-12">
          <h5 className="text-black-text font-baskervville italic font-normal text-lg md:text-xl lg:text-2xl">
            {project?.desc}
          </h5>
          <div className="mt-5 border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Research Findings</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <h6>{project?.research}</h6>
            </div>
          </div>

          <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Tasks</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <ul className="list-disc flex flex-col gap-4">
                {project?.tasks?.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {project && project?.thirdimg && project?.fourthimg && (
          <div className="md:my-16 p-5 md:p-10 lg:p-20 w-full flex flex-col md:flex-row items-center justify-center gap-5 bg-light-pink rounded-xl md:rounded-3xl">
            <div className="flex flex-col gap-2 md:gap-5">
              <span className="italic font-baskervville text-lg md:text-2xl">
                Current Design
              </span>
              <img
                src={require(`../../assets/${project?.thirdimg}.png`)}
                alt="img-sketch"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-5">
              <span className="italic font-baskervville text-xl md:text-2xl">
                New Design
              </span>
              <img
                src={require(`../../assets/${project?.fourthimg}.png`)}
                alt="img-sketch"
                className="w-full"
              />
            </div>
          </div>
        )}

        {project && project?.mobilefirst && (
          <div className="my-7 md:my-10 lg:my-16 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.mobilefirst}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )}

        <div className="lg:px-32">
          <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Proposed Features</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <ul className="list-disc flex flex-col gap-4">
                {project?.features?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {project && project?.mobilesec && (
          <div className="md:mt-10 lg:mt-20 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.mobilesec}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )}

        {project && project?.middle && (
          <div className="my-7 md:my-10 lg:my-16 w-full">
            <div className="">
              <img
                src={require(`../../assets/${project?.middle}.png`)}
                alt="img"
                className="w-full"
              />
            </div>
          </div>
        )}

        <div className="lg:px-32">
          <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Final Designs</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <ul className="list-disc flex flex-col gap-4">
                {project?.final?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {project?.sub.length && (
          <div>
            {project?.sub?.map((img, i) => (
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(147.85deg, #D9E5EB 0%, #EDBDE9 47.34%, #B189F1 100%)",
                }}
                className="my-5 md:my-16 w-full flex justify-center items-center p-5 md:p-14 lg:p-24 rounded-xl lg:rounded-[30px]"
                key={i}
              >
                <img
                  src={require(`../../assets/${img}.png`)}
                  alt="img-sketch"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        )}

        <div className="lg:px-32">
          <div className="lg:py-5 flex justify-between text-medium-grey font-sans md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Outcome</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <p className="list-disc flex flex-col gap-4">
                {project?.outcome}
              </p>
            </div>
          </div>
        </div>

        <Check data={checkData} right />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsDetails;
