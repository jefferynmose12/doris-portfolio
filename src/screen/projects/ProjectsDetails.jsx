import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import detailImg from "../../assets/detailImg.png";
import Footer from "../../components/footer/Footer";
import detailpics1 from "../../assets/detailpics1.png";
import detailpics2 from "../../assets/detailpics2.png";
import sketch from "../../assets/sketch.png";
import figma from "../../assets/figma.png";
import design from "../../assets/design.png";
import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import Check from "../../components/check/Check";

const tasks = [
  "User research revealed that safety, affordability, flexibility, and comfort were top priorities for riders, while drivers emphasised the importance of platform trust and safety.",
  "User research revealed that safety, affordability, flexibility, and comfort were top priorities for riders, while drivers emphasised the importance of platform trust and safety.",
  "User research revealed that safety, affordability, flexibility, and comfort were top priorities for riders, while drivers emphasised the importance of platform trust and safety.",
];

const ProjectsDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const findItem = data.find((item) => item.id === Number(id));
    setProject(findItem);
  }, [id]);

  console.log(project);

  const checkData = Number(id) === 1 ? [data[1], data[2]] : [data[0], data[1]];

  const renderHeder = () => {
    const textId = Number(id);

    if (textId === 2)
      return (
        <h2>
          An <span className="text-black-text italic">innovative </span>
          solution that integrates key CRM features into a
          <span className="text-black-text italic"> system platform.</span>
        </h2>
      );

    if (textId === 3)
      return (
        <h2>
          An <span className="text-black-text italic">innovative </span>
          solution that integrates key CRM features into a
          <span className="text-black-text italic"> system platform.</span>
        </h2>
      );

    if (textId === 4)
      return (
        <h2>
          An <span className="text-black-text italic">innovative </span>
          solution that integrates key CRM features into a
          <span className="text-black-text italic"> system platform.</span>
        </h2>
      );

    return (
      <h2>
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
        <div className="lg:px-32 w-[95%] md:w-[85%] mt-16 md:mt-20 xl:mt-32 2xl:mt-48 text-2xl md:text-3xl lg:text-5xl font-normal leading-tight font-baskervville text-fade-grey">
          {renderHeder()}
        </div>

        {project && (
          <div className="my-7 md:my-10 lg:my-16 w-full">
            <img
              src={require(`../../assets/${project?.image}.png`)}
              alt="img"
              className="w-full"
            />
          </div>
        )}
        <div className="lg:px-32 my-12 text-fade-grey">
          <h5 className="text-black-text font-baskervville italic font-normal text-xl md:text-2xl">
            {project?.name}
          </h5>
          <div className="mt-5 border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-['inter'] md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Year</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <h6>{project?.year}</h6>
            </div>
          </div>

          <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-['inter'] md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Service</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <h6>{project?.service}</h6>
            </div>
          </div>

          <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-['inter'] md:text-lg lg:text-xl font-normal">
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
            <div className="flex-1 w-full ">
              <img
                src={require(`../../assets/${project?.firstimg}.png`)}
                alt="detail"
                className="w-full"
              />
            </div>
            <div className="flex-1 w-full">
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
          <div className="mt-5 border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-['inter'] md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Research Findings</h6>
            </div>

            <div className="md:flex-1 w-[65%] md:w-auto">
              <h6>{project?.research}</h6>
            </div>
          </div>

          <div className="border-t border-light-grey-border py-5 md:py-8 lg:py-10 flex justify-between text-medium-grey font-['inter'] md:text-lg lg:text-xl font-normal">
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

        {project && (
          <div className="my-5 md:my-16 w-full">
            <img
              src={require(`../../assets/${project?.thirdimg}.png`)}
              alt="img-sketch"
              className="w-full"
            />
          </div>
        )}

        <div className="lg:px-32">
          <div className="py-5 flex justify-between text-medium-grey font-['inter']  md:text-lg lg:text-xl font-normal">
            <div className="md:flex-1 w-[30%] md:w-auto">
              <h6>Proposed Features</h6>
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
              <div key={i} className="my-5 md:my-16 w-full">
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
          <div className="py-5 flex justify-between text-medium-grey font-['inter']  md:text-lg lg:text-xl font-normal">
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
