import Hero from "@/components/Hero/Hero";
import InfoCard from "@/components/InfoCard/InfoCard";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex justify-center bg-peachyblue h-max p-2 pt-5 rounded-md">
      <div className="container max-w-lg lg:w-96 bg-peachybeige font-geistSans flex items-start flex-col rounded-md">
        <Hero/>
        <InfoCard/>
        <Projects/>
        <Footer />
      </div>
    </div>
  );
}
