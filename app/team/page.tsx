import Card from "../components/Card";
import HorizontalCard from "../components/HorizontalCard";
import SpecialWord from "../components/SpecialWord";
import {
  advisor,
  improvCaptains,
  officers,
  productionHeads,
} from "../lib/data";
import Image from "next/image";

export const metadata = {
  title: "Team",
};

export default function Team() {
  return (
    <main className="flex flex-col gap-16">
      <div className="rounded-2xl group shadow flex flex-col md:grid grid-cols-8 relative justify-start items-stretch bg-white bg-opacity-70 backdrop-blur-md overflow-hidden border border-black border-opacity-10">
        <div className="relative w-full md:col-span-3 min-h-[60vw] md:min-h-0 z-0">
          <Image
            src={advisor.image}
            fill
            alt={advisor.name}
            className="object-cover object-center"
          />
        </div>
        <div
          className={`px-4 py-5 md:py-[5vw] md:col-span-5 flex justify-center flex-col gap-1`}
        >
          <h1 className="font-domine text-3xl md:text-4xl text-black font-bold text-left">
            {advisor.name}
          </h1>
          <h2 className="font-rubik text-red font-semibold text-left text-lg md:text-xl">
            {advisor.role}
          </h2>
          <p className="font-rubik text-base md:text-lg text-black text-left">
            {advisor.bio}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-domine text-3xl md:text-4xl text-center font-bold">
          Drama Club <SpecialWord period>Officers</SpecialWord>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {officers.map((officer) => (
            <Card
              key={officer.name}
              image={officer.image}
              subtitle={officer.role}
              title={officer.name}
              content={officer.bio}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-domine text-3xl md:text-4xl text-center font-bold">
          Production <SpecialWord period>Heads</SpecialWord>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productionHeads.map((head) => (
            <Card
              key={head.name}
              image={head.image}
              subtitle={head.role}
              title={head.name}
              content={""}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-domine text-4xl text-center font-bold">
          Improv <SpecialWord period>Captains</SpecialWord>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {improvCaptains.map((head) => (
            <HorizontalCard
              key={head.name}
              image={head.image}
              subtitle={head.role}
              title={head.name}
              content={""}
              even
            />
          ))}
        </div>
      </div>
    </main>
  );
}
