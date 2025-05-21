import ProfileCard from "@/components/ProfileCard";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import SectionWrapper from "@/components/SectionWrapper";

export default function HomePage() {
  return (
    <div className="dark:bg-[#0e0e0e] text-black dark:text-white shadow-[0_0_40px_rgba(255,255,255,0.03)]">
      <SectionWrapper>
        <div className="md:pt-36 ">
          <ProfileCard />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-[#171B1A] text-white">
          <Resume />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-[#171B1A] text-white">
          <Skills />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-[#171B1A] text-white">
          <Portfolio />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-[#171B1A] text-white">
          <Blog />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-[#171B1A] text-white">
          <Pricing />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-[#171B1A] text-white">
          <Contact />
        </div>
      </SectionWrapper>
    </div>
  );
}
