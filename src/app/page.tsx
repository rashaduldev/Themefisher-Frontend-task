import ProfileCard from "@/components/ProfileCard";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function HomePage() {
  return(
    <div className="dark:bg-[#0e0e0e] text-black dark:text-white ">
        <ProfileCard />
        <div className="max-w-[1320px] px-4 mx-auto bg-[#171B1A] dark:bg-zinc-900 text-white">
          <Resume/>
          <Skills/>
          <Pricing/>
          <Contact/>
        </div>
    </div>
  )
}
