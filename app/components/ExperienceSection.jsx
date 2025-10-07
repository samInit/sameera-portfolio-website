/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "May 2025 - July 2025",
    title: "AI Intern",
    company: "AutomatR",
    description:
      "Developed centralized LLM infrastructure and integrated multi-provider AI workflows, improving response quality and reducing development time across teams through scalable automation solution.",
    skills: ["LLM", "AI Workflows", "Python", "API Integration"],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 7H7v6h6V7z" />
        <path
          fillRule="evenodd"
          d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    year: "March 2025 - May 2025",
    title: "Web Development Intern",
    company: "SERB (Science and Engineering Research Board)",
    description:
      "Developed a full-stack web platform using Next.js and FastAPI, integrating 5+ deep learning models for real-time biological sequence predictions with scalable, modular backend workflows.",
    skills: ["Next.js", "Node.js", "FastAPI", "Deep Learning"],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    year: "August 2023 - August 2025",
    title: "Technical Lead",
    company: "IOTA - Technical Club",
    description:
      "Led the IOTA student chapter for one year, driving community initiatives and technical growth. Previously served as an AI/ML core member, contributing to 6+ major tech events—including Global Game Jam 2025 with 250+ participants—and hosting interactive AI/ML sessions for 50+ attendees.",
    skills: ["Leadership", "Event Management", "AI/ML", "Community Building"],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-8 sm:py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Experience
            </span>
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg max-w-2xl mx-auto px-4">
            A journey through my professional experiences and contributions to
            various organizations
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line with gradient - Responsive positioning */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-8 sm:mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:mr-auto md:pr-8 lg:pr-12"
                  : "md:ml-auto md:pl-8 lg:pl-12"
              } md:w-1/2 pl-12 sm:pl-16 md:pl-0`}
            >
              {/* Animated timeline dot - Responsive sizing and positioning */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                className={`absolute top-4 sm:top-6 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-2 sm:border-3 md:border-4 border-[#121212] shadow-lg ${
                  index % 2 === 0
                    ? "left-[10px] sm:left-[18px] md:left-auto md:right-[-10px] lg:right-[-12px]"
                    : "left-[10px] sm:left-[18px] md:left-[-10px] lg:left-[-12px]"
                }`}
              >
                <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20"></div>
              </motion.div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#181818] rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-[#33353F] hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/20 hover:scale-[1.02] md:hover:scale-105">
                {/* Header with icon - Responsive layout */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-2 sm:p-3 rounded-lg border border-primary-500/30 shrink-0">
                    <div className="text-primary-400 w-5 h-5 sm:w-6 sm:h-6">
                      {exp.icon}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full border border-primary-500/30 mb-2">
                      {exp.year}
                    </span>
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                      {exp.title}
                    </h3>
                    <h4 className="text-secondary-400 text-sm sm:text-base md:text-lg font-semibold mt-1 flex items-center gap-2">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="break-words">{exp.company}</span>
                    </h4>
                  </div>
                </div>

                {/* Description - Responsive text sizing */}
                <p className="text-[#ADB7BE] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {exp.description}
                </p>

                {/* Skills tags - Responsive sizing */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-secondary-500/10 text-secondary-300 text-xs sm:text-sm rounded-md border border-secondary-500/30 hover:bg-secondary-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
