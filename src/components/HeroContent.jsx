import React from "react";
import { ArrowRight, Play, Users, Award, Zap } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="space-y-6 sm:space-y-8 py-8 lg:py-0">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20">
        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
        <span className="text-xs sm:text-sm font-medium text-blue-600">
          India's #1 Trading Education Platform
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
        <span className="text-gray-900">Master the</span>
        <br />
        <span className="text-gray-900">Art of</span>{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-blue-600">Trading</span>
          <svg
            className="absolute -bottom-2 left-0 w-full"
            viewBox="0 0 200 12"
            fill="none"
          >
            <path
              d="M2 10C50 2 150 2 198 10"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-30"
            ></path>
          </svg>
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
        Join 30,000+ traders who've transformed their trading journey. Learn
        from mentors with 9+ years of market expertise.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98] transition-all duration-200 h-11 min-h-11 rounded-md sm:px-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base sm:text-lg font-semibold group relative overflow-hidden">
          <span className="relative z-10 flex items-center">
            Start Learning Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation border-2 border-gray-200 bg-white hover:text-gray-900 hover:border-blue-600/30 active:scale-[0.98] h-11 min-h-11 rounded-md sm:px-8 px-8 py-6 text-base sm:text-lg font-semibold hover:bg-blue-600/5 group text-gray-700">
          <Play className="mr-2 w-5 h-5 fill-current" />
          View Programs
        </button>
      </div>

      <div className="flex flex-wrap gap-6 sm:gap-10 pt-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/10">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              30,000+
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Active Students
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/10">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              9+
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Years of Experience
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/10">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              500+
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Live Sessions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
