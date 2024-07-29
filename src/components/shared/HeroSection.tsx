import Image from "next/image";
import FormSection from "./FormSection";
import social from "../../../public/assets/socialIllustration.png"

const HeroSection = () => {

  return (
    <section className="flex items-center flex-col-reverse lg:flex-row lg:justify-around lg:gap-20 mt-12 lg:ml-16 lg:mr-16 ml-6 mr-6">
      <div className="lg:w-1/2">
        <h1 className="font-bold text-3xl lg:text-5xl leading-tight w-full">
          The Ultimate Influencer 
          <span className="text-[#FE6B01]"> Learning Hub</span>
        </h1>
        <p className="text-sm lg:text-md mt-4 mb-4 w-full lg:w-2/3">
          Learn from the best content creators and influencers, and up
          your game. 
          Sign up now to get exclusive access to all resources...
        </p>
        <FormSection/>
      </div>
      <div className="lg:w-1/2">
        <Image src={social} alt="Social Media Influencer" priority width={600} height={600}/>
      </div>
    </section>
  );
};

export default HeroSection;
