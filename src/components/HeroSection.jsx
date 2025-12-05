import React from "react";
import HeroContent from "./HeroContent";
import HeroImageCard from "./HeroImageCard";

const HeroSection = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white leading-snug">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9f9f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f9f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 relative">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-8 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-0">
          <div className="lg:col-span-6 space-y-8 relative z-10">
            <HeroContent />
          </div>

          <div className="lg:col-span-6 relative flex  lg:justify-end lg:pl-8 lg:pr-0">
            <HeroImageCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
