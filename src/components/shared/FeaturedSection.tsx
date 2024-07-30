import { BadgeDollarSign, ChartNoAxesCombined, PackageSearch, Youtube } from "lucide-react";
import React from "react";

const FeaturedSection = () => {
  return (
    <section className="text-slate-50 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex items-center justify-center mb-8 lg:mb-16 gap-2">
          <h1 className="lg:text-5xl text-2xl font-bold lg:text-center">
            Features Provided
          </h1>
          <PackageSearch className="size-6 lg:size-10 stroke-[#FE6B01]"/>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="md:w-1/3 flex text-center lg:text-left items-center flex-col lg:flex-row">
                <Youtube className="size-16 lg:size-48 stroke-[#FE6B01]"/>
            <div className="flex-grow px-4">
              <h2 className="text-[#FE6B01] text-lg title-font font-medium mb-2">
                Best Courses from Big Creators
              </h2>
              <p className="leading-relaxed text-base">
                Learn from the bests in the game and level up your game as a content creator, gain more subscribers, monetize your audience and live your dream life.
              </p>
            </div>  
          </div>
          <div className="md:w-1/3 flex text-center lg:text-left items-center flex-col lg:flex-row">
          <ChartNoAxesCombined className="size-16 lg:size-44 stroke-[#FE6B01]"/>
            <div className="flex-grow px-4">
              <h2 className="text-[#FE6B01] text-lg title-font font-medium mb-2">
                Analytical Tools
              </h2>
              <p className="leading-relaxed text-base">
                Track your progress with tools such as analytics. Keep record of your progress and check out areas which can be improved.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 flex text-center lg:text-left items-center flex-col lg:flex-row pb-4 lg:pb-0">
          <BadgeDollarSign className="size-16 lg:size-48 stroke-[#FE6B01]"/>
            <div className="flex-grow px-4">
              <h2 className="text-[#FE6B01] text-lg title-font font-medium mb-2">
                Easy Payment
              </h2>
              <p className="leading-relaxed text-base">
                Starting from weekly subscription as well as monthly subscription. Access to all the courses while subscribed to a package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
