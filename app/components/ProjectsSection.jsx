/** @format */

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectTag from "./ProjectTag.jsx";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, Tailwind CSS, React and TypeScript, featuring server-side rendering, a sleek UI, and email functionality powered by Resend.",
    image: "/images/projects/web_project_1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sameera9304/sameera-portfolio-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "EduGen",
    description:
      "This project uses AI and Google's Generative AI to transform YouTube video transcripts into structured educational content, including notes, summaries, and quizzes.",
    image: "/images/projects/aiml-edugen.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/S-a-m-93/EduGen",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Story Spark",
    description:
      "This is a Streamlit app that leverages the Llama-2-7B-Chat-GGML model to generate creative story ideas based on user inputs for theme, character, setting, and genre.",
    image: "/images/projects/aiml-story-spark.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/S-a-m-93/Story-Spark",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;
