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
        <div className="pt-36 ">
          <ProfileCard />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white">
          <Resume />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white">
          <Skills />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white">
          <Portfolio />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white">
          <Blog />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white">
          <Pricing />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white">
          <Contact />
        </div>
      </SectionWrapper>
    </div>
  );
}
