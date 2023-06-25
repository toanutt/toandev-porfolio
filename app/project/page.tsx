"use client";
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import Image from "next/image";
import { fadeIn, textVariant } from "@/components/ultis/motion";
import { projects } from "@/lib/constants";
import { Tilt } from "react-tilt";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

const ProjectCard = (index: number, cardProps: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={cardProps.image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* <Image
                // src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              /> */}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{cardProps.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {cardProps.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {cardProps.tags &&
            cardProps.tags.map((tag) => (
              <p
                key={`${cardProps.name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function Project() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
        >
          My work
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]text-center`}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

// export default function Project() {
//   return <div>This is Project Page</div>;
// }
