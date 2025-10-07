/** @format */

"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        {/* Frontend Skills */}
        <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#1f1f1f] transition-all">
          <h3 className="text-xl font-bold text-primary-400 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            Frontend Development
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              React.js
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Next.js
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              HTML5 & CSS3
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Redux
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Zustand
            </span>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#1f1f1f] transition-all">
          <h3 className="text-xl font-bold text-secondary-400 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              Node.js
            </span>
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              Express.js
            </span>
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              MySQL
            </span>
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              REST APIs
            </span>
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              FastAPI
            </span>
            <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30">
              Flask
            </span>
          </div>
        </div>

        {/* Tools & Others */}
        <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#1f1f1f] transition-all">
          <h3 className="text-xl font-bold text-primary-400 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Git & GitHub
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              AWS
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Docker
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Vercel
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              Postman
            </span>
            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
              VS Code
            </span>
          </div>
        </div>

        {/* LeetCode Profile */}
        <a
          href="https://leetcode.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#181818] rounded-lg p-4 hover:bg-[#1f1f1f] transition-all block group border border-transparent hover:border-secondary-500/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-secondary-500/20 p-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-secondary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-400 group-hover:text-secondary-300 transition-colors">
                  View my LeetCode profile
                </h3>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-secondary-400 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </a>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="bg-[#181818] rounded-lg p-5 hover:bg-[#1f1f1f] transition-all border-l-4 border-primary-500">
          <div className="flex items-start gap-4">
            <div className="bg-primary-500/20 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-primary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                Indian Institute of Information Technology, Sricity
              </h3>
              <p className="text-primary-400 font-semibold mb-2">
                Bachelor of Technology - Computer Science Engineering
              </p>
              <p className="text-[#ADB7BE] text-sm">2022 - 2026 (Expected)</p>
              <p className="text-[#ADB7BE] text-sm mt-2">
                Pre-final year student specializing in full-stack web
                development and software engineering
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] rounded-lg p-5 hover:bg-[#1f1f1f] transition-all border-l-4 border-secondary-500">
          <div className="flex items-start gap-4">
            <div className="bg-secondary-500/20 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-secondary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">FIITJEE</h3>
              <p className="text-secondary-400 font-semibold mb-2">
                Maths, Physics, Chemistry - State Board
              </p>
              <p className="text-[#ADB7BE] text-sm">Visakhapatnam</p>
              <p className="text-[#ADB7BE] text-sm mt-2">
                Intensive preparation for engineering entrance examinations
              </p>
            </div>
          </div>
        </div>
      </div>
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
    <section className="text-white py-16 relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
            Me
          </span>
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-[#ADB7BE] text-lg leading-relaxed">
            Experienced in the{" "}
            <span className="text-secondary-400 font-semibold">MERN stack</span>{" "}
            and modern web technologies. Quick learner, collaborative team
            player, and always eager to expand my technical expertise through
            challenging projects.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Tabs Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <div className="flex flex-row justify-start gap-4 mb-6">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
            </div>

            {/* Tab Content */}
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </motion.div>

          {/* Right Column - Interests & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 py-16"
          >
            {/* Interests */}
            <div className="bg-[#181818] rounded-lg p-6 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Interests
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">▹</span>
                  <p className="text-[#ADB7BE]">
                    Building scalable web applications with modern frameworks
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">▹</span>
                  <p className="text-[#ADB7BE]">
                    Exploring new technologies and best practices in software
                    development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">▹</span>
                  <p className="text-[#ADB7BE]">
                    Mastering Low-Level Design and software architecture for
                    building maintainable systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">▹</span>
                  <p className="text-[#ADB7BE]">
                    Problem-solving through competitive programming and coding
                    challenges
                  </p>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="bg-[#181818] rounded-lg p-6 border border-secondary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-secondary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Currently Exploring
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-secondary-500/20 text-secondary-300 rounded-lg text-sm border border-secondary-500/30 hover:bg-secondary-500/30 transition-colors">
                  Low Level Design
                </span>
                <span className="px-3 py-2 bg-secondary-500/20 text-secondary-300 rounded-lg text-sm border border-secondary-500/30 hover:bg-secondary-500/30 transition-colors">
                  Microservices Architecture
                </span>
                <span className="px-3 py-2 bg-secondary-500/20 text-secondary-300 rounded-lg text-sm border border-secondary-500/30 hover:bg-secondary-500/30 transition-colors">
                  System Design
                </span>
                <span className="px-3 py-2 bg-secondary-500/20 text-secondary-300 rounded-lg text-sm border border-secondary-500/30 hover:bg-secondary-500/30 transition-colors">
                  Java Development (SpringBoot)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
