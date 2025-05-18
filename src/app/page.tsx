import Banner from "@/components/Banner";
import Resume from "@/components/Resume";

export default function HomePage() {
  return(
    <div className="dark:bg-[#0e0e0e] text-black dark:text-white ">
        <Banner />
        <Resume/>
    </div>
  )
}
