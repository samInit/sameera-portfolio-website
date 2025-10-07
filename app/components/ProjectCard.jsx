/** @format */

import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="h-52 md:h-72 rounded-t-xl relative overflow-hidden bg-[#181818]">
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>

        {/* Overlay with icons */}
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#181818] via-[#181818]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300 hover:scale-110"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300 hover:scale-110"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-colors" />
          </Link>
        </div>
      </div>

      {/* Content Container */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#181818] rounded-b-xl px-6 py-6 border-x border-b border-[#33353F] group-hover:border-primary-500/50 transition-all duration-300">
        <h5 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-1">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Indicator (optional decoration) */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <svg
            className="w-4 h-4 text-primary-400 opacity-50 group-hover:opacity-100 transition-opacity"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-secondary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-secondary-500/10 group-hover:to-primary-500/10 -z-10 blur-xl transition-all duration-500"></div>
    </div>
  );
};

export default ProjectCard;
