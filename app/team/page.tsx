import Card from "../components/Card";
import HorizontalCard from "../components/HorizontalCard";
import {
  advisor,
  improvCaptains,
  officers,
  productionHeads,
} from "../lib/data";

export default function Team() {
  return (
    <main className="flex flex-col gap-10">
      <HorizontalCard
        image={advisor.image}
        title={advisor.name}
        subtitle={advisor.role}
        content={advisor.bio}
      />
      <div className="flex flex-col gap-5">
        <h1 className="font-domine text-4xl text-center font-bold">
          Drama Club Officers
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
          Production Heads
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
          Improv Captains
        </h1>
        <div className="grid grid-cols-2 gap-5">
          {improvCaptains.map((head) => (
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
    </main>
  );
}
