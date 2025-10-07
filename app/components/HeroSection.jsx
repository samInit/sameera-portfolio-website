/** @format */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/herosection/image1.JPG",
    "/images/herosection/image2.JPG",
    "/images/herosection/image3.JPG",
    "/images/herosection/image4.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-8 lg:py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
        {/* Text Content - 6 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 lg:col-span-6 place-self-center text-center lg:text-left px-4"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-4 py-2 mb-4"
          >
            <SparklesIcon className="w-5 h-5 text-primary-400" />
            <span className="text-sm text-primary-300 font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-white mb-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
          >
            <span className="block mb-2">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-600 animate-gradient">
                Kusala Sameera
              </span>
            </span>
          </motion.h1>

          {/* Dynamic Typing Section */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl lg:text-3xl font-bold">
              <CodeBracketIcon className="w-6 h-6 lg:w-8 lg:h-8 text-primary-400" />
              <span className="text-white">Passionate about</span>
            </div>
            <TypeAnimation
              sequence={[
                "Full-Stack Development",
                2000,
                "Generative AI Innovation",
                2000,
                "Building Scalable Systems",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-500 text-2xl sm:text-3xl lg:text-4xl font-bold mt-2"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Final year Computer Science student at{" "}
            <span className="text-primary-400 font-semibold">IIIT Sricity</span>
            , specializing in crafting innovative web applications and
            intelligent AI solutions. Transforming ideas into impactful digital
            experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Link
              href="#contact"
              className="group px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50 flex items-center justify-center gap-2"
            >
              <RocketLaunchIcon className="w-5 h-5 group-hover:animate-bounce" />
              Let's Work Together
            </Link>
            <Link
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 font-semibold text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Carousel - 6 columns with REDUCED height */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 lg:col-span-6 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-lg blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500/20 rounded-lg blur-xl"></div>

            {/* Image Container - REDUCED HEIGHT */}
            <div className="relative rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-1 backdrop-blur-sm">
              <div className="rounded-xl bg-[#181818] w-[280px] h-[320px] sm:w-[380px] sm:h-[450px] lg:w-[450px] lg:h-[500px] relative overflow-hidden shadow-2xl">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Kusala Sameera ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    width={450}
                    height={500}
                    priority={index === 0}
                  />
                ))}

                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-60"></div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? "w-6 h-2.5 bg-primary-500"
                          : "w-2.5 h-2.5 bg-gray-500 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-medium">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Floating Icons - Smaller */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 -right-4 bg-gradient-to-br from-primary-500 to-secondary-500 p-2.5 rounded-lg shadow-lg hidden lg:block"
            >
              <CodeBracketIcon className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-16 -left-4 bg-gradient-to-br from-secondary-500 to-primary-500 p-2.5 rounded-lg shadow-lg hidden lg:block"
            >
              <SparklesIcon className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
