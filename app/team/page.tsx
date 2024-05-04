import Card from "../components/Card";
import HorizontalCard from "../components/HorizontalCard";
import SpecialWord from "../components/SpecialWord";
import {
  advisor,
  improvCaptains,
  officers,
  productionHeads,
} from "../lib/data";

export const metadata = {
  title: "Team",
};

export default function Team() {
  return (
    <main className="flex flex-col gap-16">
      <HorizontalCard
        image={advisor.image}
        title={advisor.name}
        subtitle={advisor.role}
        content={advisor.bio}
      />
      <div className="flex flex-col gap-5">
        <h1 className="font-domine text-4xl text-center font-bold">
          Drama Club <SpecialWord period>Officers</SpecialWord>
        </h1>
        <div className="grid grid-cols-3 gap-5">
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
        <h1 className="font-domine text-4xl text-center font-bold">
          Production <SpecialWord period>Heads</SpecialWord>
        </h1>
        <div className="grid grid-cols-4 gap-5">
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
        <div className="grid grid-cols-2 gap-5">
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
