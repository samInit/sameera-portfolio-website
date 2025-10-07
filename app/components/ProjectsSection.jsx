/** @format */

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectTag from "./ProjectTag.jsx";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Alumni Portal for IIIT Sricity",
    description:
      "A full-stack platform connecting students, alumni, and faculty to facilitate networking, mentorship, referrals, job opportunities, and event management, built with Next.js, Node.js, and MongoDB.",
    image: "/images/projects/alumni_portal.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/iiits/alumni-portal",
    previewUrl: "https://alumni.iiits.in/",
    featured: true,
  },
  {
    id: 2,
    title: "SHELFIE – Inventory Management Application",
    description:
      "A full-stack web platform for managing products, users, expenses, and dashboards, featuring a responsive Next.js frontend, Node.js/Express backend, and PostgreSQL database, deployed on AWS for secure and scalable hosting.",
    image: "/images/projects/shelfie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/samInit/Shelfie/",
    previewUrl: "https://main.d1tlldq64w3cfl.amplifyapp.com/",
    featured: true,
  },
  {
    id: 3,
    title: "DrCMDs Predictor",
    description:
      "Developed a full-stack web platform using Next.js and FastAPI, integrating 5+ deep learning models for real-time biological sequence predictions with scalable, modular backend workflows.",
    image: "/images/projects/serb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SERB-Project/",
    previewUrl: "https://serb-frontend.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "My Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, Tailwind CSS, React and TypeScript, featuring server-side rendering, a sleek UI, and email functionality by Nodemailer.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sameera9304/sameera-portfolio-website",
    previewUrl: "/",
    featured: false,
  },
  {
    id: 5,
    title: "EduGen",
    description:
      "This project uses AI and Google's Generative AI to transform YouTube video transcripts into structured educational content, including notes, summaries, and quizzes.",
    image: "/images/projects/aiml-edugen.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/S-a-m-93/EduGen",
    previewUrl: "https://s-a-m-93-edugen-app-e27zln.streamlit.app/",
    featured: false,
  },
  {
    id: 6,
    title: "Story Spark",
    description:
      "This is a Streamlit app that leverages the Llama-2-7B-Chat-GGML model to generate creative story ideas based on user inputs for theme, character, setting, and genre.",
    image: "/images/projects/aiml-story-spark.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/S-a-m-93/Story-Spark",
    previewUrl: "/",
    featured: false,
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
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Projects
            </span>
          </h2>
          <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
            Showcasing a collection of full-stack applications, AI/ML solutions,
            and innovative web projects
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
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
        </motion.div>

        {/* Projects Grid */}
        <ul
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative"
            >
              {/* Featured badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                >
                  ⭐ Featured
                </motion.div>
              )}
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block p-6 bg-[#181818] rounded-full mb-4">
              <svg
                className="w-16 h-16 text-[#ADB7BE]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-[#ADB7BE]">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
