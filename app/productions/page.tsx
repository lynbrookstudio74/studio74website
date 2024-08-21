import Image from "next/image";
import SpecialWord from "../components/SpecialWord";
import HorizontalCard from "../components/HorizontalCard";
import {
  currentProduction,
  pastProductions,
  productionButtons,
} from "../lib/data";
import Card from "../components/Card";

export const metadata = {
  title: "Productions",
};

export default function Shows() {
  return (
    <main className="flex flex-col gap-16">
      <div className="flex gap-3 flex-col items-center justify-center min-h-40 my-10">
        <div className="absolute bg-black top-12">
          <Image
            width={1920}
            height={1080}
            src="/productions.jpg"
            alt="A picture of the cast of the Laramie Project after the last show z-0"
            className="object-cover object-center h-72 z-0 w-screen opacity-20"
            priority
          />
        </div>
        <h1 className="font-domine relative font-extrabold text-center z-20 text-5xl md:text-6xl text-white">
          High Quality, Student-Led{" "}
          <SpecialWord period>Productions</SpecialWord>
        </h1>
      </div>
      {currentProduction.display && (
        <div>
          <div className="group grid grid-cols-8 gap-5 relative justify-start items-stretch overflow-hidden">
            <div className="relative w-full md:h-full min-h-[100vw] md:min-h-0 z-0 col-span-8 md:col-span-3">
              <Image
                src={currentProduction.image}
                fill
                alt={currentProduction.title}
                className="object-cover object-center"
              />
            </div>
            <div
              className={`px-4 py-2 md:py-10 flex flex-col gap-1 col-span-8 md:col-span-5`}
            >
              <h2 className="font-rubik text-red font-semibold text-left text-lg md:text-xl">
                CURRENT SHOW
              </h2>
              <h1 className="font-domine text-3xl md:text-4xl text-black font-bold text-left">
                {currentProduction.title}
              </h1>
              <p className="font-rubik text-base md:text-lg text-black text-left">
                {currentProduction.description}
              </p>
              <div className="flex flex-col md:flex-row gap-3 mt-2">
                {productionButtons.map((button) => (
                  <a
                    key={button.title}
                    className={`font-rubik text-base md:text-lg text-black font-medium inline-flex items-center justify-center gap-1 py-1 px-3 rounded-lg ${
                      button.link === ""
                        ? "cursor-not-allowed bg-black bg-opacity-20"
                        : "bg-red bg-opacity-80"
                    }`}
                    href={button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {button.title}
                    {button.link !== "" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5">
        <h1 className="font-domine text-3xl md:text-4xl text-center font-bold">
          Past <SpecialWord period>Productions</SpecialWord>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5">
          {pastProductions.map((production) => (
            <Card
              key={production.name}
              title={production.name}
              image={production.image}
              subtitle={production.subtitle}
              content={
                <a
                  className={`text-black bg-opacity-30 inline-flex items-center gap-1 my-1 rounded-lg py-1.5 px-3 font-rubik ${
                    production.link === ""
                      ? "cursor-not-allowed bg-black bg-opacity-20"
                      : "hover:bg-opacity-40 bg-red transition-all duration-200 ease-in-out"
                  }`}
                  href={production.link === "" ? undefined : production.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {production.link !== "" ? (
                    <>
                      Watch the Recording
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </>
                  ) : (
                    <>Recording Coming Soon</>
                  )}
                </a>
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}
