import HeroSection from "@/components/shared/HeroSection";
import Socials from "@/components/shared/Socials";

export default function Home() {
  return (
    <>
      <section className="h-full flex flex-col items-center gap-6">
        <HeroSection />
        <Socials/>
      </section>
    </>
  );
}
