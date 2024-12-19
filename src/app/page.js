import Hero from "@/components/Hero/Hero";
import InfoCard from "@/components/InfoCard/InfoCard";

export default function Home() {
  return (
    <div className="flex justify-center bg-peachyblue h-screen p-2 pt-5 rounded-md">
      <div className="container max-w-lg lg:w-96 bg-peachybeige font-[family-name:var(--font-geist-sans)] flex items-start flex-col rounded-md">
        <Hero/>
        <InfoCard/>
      </div>
    </div>
  );
}
