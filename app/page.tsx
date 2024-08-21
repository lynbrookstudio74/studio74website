import Image from "next/image";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { useEffect, useRef } from "react";
import SpecialWord from "./components/SpecialWord";
import Card from "./components/Card";
import Discipline from "./components/Discipline";
import { text } from "./lib/data";

export const metadata = {
  title: "Home | Lynbrook Drama",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div className="flex gap-3 flex-col items-center justify-center mt-10">
        <h1 className="font-domine font-extrabold text-center text-5xl md:text-6xl text-black">
          {text.home.title.split("/")[0]}
          {text.home.title.split("/").length > 1 && (
            <SpecialWord period>{text.home.title.split("/")[1]}</SpecialWord>
          )}
        </h1>
        <p className="font-rubik max-w-[100ch] text-base md:text-lg text-center">
          {text.home.topDesc}
        </p>
        <h2 className="font-rubik text-3xl md:text-4xl text-center text-black">
          {text.home.clubMtg}
        </h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <Card
          title="Productions"
          content={text.home.prodDesc}
          image={text.home.prodImage}
        />
        <Card
          title="Improv"
          content={text.home.improvDesc}
          image={text.home.improvImage}
        />
        <Card
          title="Festivals"
          content={text.home.festivalDesc}
          image={text.home.festivalImage}
        />
      </div>
      <div>
        <h1 className="font-domine text-center text-black font-extrabold text-4xl md:text-5xl">
          {text.home.disciplineTitle.split("/")[0]}
          {text.home.disciplineTitle.split("/").length > 1 && (
            <SpecialWord period>
              {text.home.disciplineTitle.split("/")[1]}
            </SpecialWord>
          )}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          <Discipline
            title="Acting"
            className="md:col-span-3 h-[25vw] md:h-[15vw]"
            image={text.home.disciplines.acting}
          />
          <Discipline title="Costumes" image={text.home.disciplines.costumes} />
          <Discipline
            title="Hair/Makeup"
            image={text.home.disciplines.makeup}
          />
          <Discipline title="Props" image={text.home.disciplines.props} />
          <Discipline
            title="Marketing"
            image={text.home.disciplines.marketing}
          />
          <Discipline title="Sound" image={text.home.disciplines.sound} />
          <Discipline title="Lights" image={text.home.disciplines.lights} />
          <Discipline title="Set" image={text.home.disciplines.set} />
          <Discipline
            title="Stage Management"
            image={text.home.disciplines.stage}
          />
          <Discipline
            title="Directing"
            image={text.home.disciplines.directing}
          />
        </div>
      </div>
      <div>
        <h1 className="font-domine text-center text-black font-extrabold text-4xl md:text-5xl gap-[0.3ch]">
          {text.home.classTitle.split("/")[0]}
          {text.home.classTitle.split("/").length > 1 && (
            <SpecialWord period>
              {text.home.classTitle.split("/")[1]}
            </SpecialWord>
          )}
        </h1>
        <div className="grid gap-5 mt-5 grid-cols-1 md:grid-cols-3">
          <Card
            title="Beginning Drama"
            content={text.home.beginningDesc}
            image={text.home.beginningImage}
          />
          <Card
            title="Advanced Drama"
            content={text.home.advancedDesc}
            image={text.home.advancedImage}
          />
          <Card
            title="Advanced Drama Honors"
            content={text.home.honorsDesc}
            image={text.home.honorsImage}
          />
        </div>
      </div>
      {/*<div>
        <h1 className="font-domine text-center text-black font-extrabold text-4xl md:text-5xl">
          {text.home.awardsTitle.split("/")[0]}
          {text.home.awardsTitle.split("/").length > 1 && (
            <SpecialWord period>
              {text.home.awardsTitle.split("/")[1]}
            </SpecialWord>
          )}
        </h1>
        <div className="grid gap-5 mt-5 grid-cols-1 md:grid-cols-5">
          {text.home.awards.map((award) => (
            <Card {...award} content="" key={award.title} />
          ))}
        </div>
      </div>*/}
    </main>
  );
}
