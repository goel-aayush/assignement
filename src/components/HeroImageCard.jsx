import React from "react";
import { Star, TrendingUp } from "lucide-react";
import heroGraphic from "../assets/hero-image.jpg";

const HeroImageCard = () => {
  return (
    <div className="relative ">
      <div className="absolute top-4 left-4 right-4 bottom-0 bg-blue-50 rounded-3xl -z-10"></div>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
        <img
          src={heroGraphic}
          alt="Trading Masterclass Mentors"
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-10 -right-10 w-[70%] h-[40%] bg-linear-to-tl from-white via-white/80 to-transparent blur-3xl opacity-100 mix-blend-normal"></div>
        </div>
      </div>

      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white border border-gray-100 shadow-xl rounded-xl p-3 sm:p-4 animate-bounce-slow">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1 text-blue-600">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill="currentColor"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-bold text-gray-800">
            4.9/5
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                  alt="Mentor"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-sm text-black/85 font-medium">
            Our Expert Mentors
          </span>
        </div>
      </div>

      <div className="hidden sm:flex absolute -bottom-8 -left-8 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-2xl p-4 items-center gap-4 z-20 animate-bounce-delayed max-w-[220px]">
        <div className="p-3 rounded-xl bg-green-50">
          <TrendingUp className="w-6 h-6 text-[#00C853]" />
        </div>
        <div>
          <div className="text-base font-bold text-gray-900 leading-tight">
            Live Trading
          </div>
          <div className="text-xs text-gray-500 mt-1">500+ Sessions</div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageCard;
