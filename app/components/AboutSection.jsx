"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row justify-between">
        <div className="w-1/2 pr-4">
          <h3 className="text-lg font-bold">ML & DL</h3>
          <ul className="list-disc pl-2">
            <li>Python</li>
            <li>TensorFlow</li>
            <li>LangChain</li>
            <li>Hugging Face</li>
            <li>Scikit-learn</li>
            <li>ChromaDB</li>
          </ul>
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="text-lg font-bold">Web Development</h3>
          <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Express</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FIITJEE - Visakhapatnam</li>
        <li>Indian Institute of Infromation Technology, Sricity</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning Specialisation</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A image of a computer in pink aesthetic"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am currently a 3rd year student in IIIT Sricity with a passion for
            building ML and DL Models. I have experience working with
            Scikit-learn, Tensorflow, React, Node and Express and Git. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
