import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

export default function HorizontalCard(props: {
  image: string | StaticImport;
  title: string;
  content: string | ReactNode;
  subtitle?: string;
  even?: boolean;
}) {
  return (
    <div className="rounded-2xl group shadow flex flex-col md:flex-row relative justify-start items-stretch bg-white bg-opacity-70 backdrop-blur-md overflow-hidden border border-black border-opacity-10">
      <div className="relative w-full min-h-[60vw] md:min-h-0 z-0">
        <Image
          src={props.image}
          fill
          alt={props.title}
          className="object-cover object-center"
        />
      </div>
      <div
        className={`px-4 py-5 md:py-10 flex justify-center flex-col gap-1 ${
          props.even ? "w-full py-20" : ""
        }`}
      >
        <h1 className="font-domine text-3xl md:text-4xl text-black font-bold text-left">
          {props.title}
        </h1>
        {props.subtitle && (
          <h2 className="font-rubik text-red font-semibold text-left text-lg md:text-xl">
            {props.subtitle}
          </h2>
        )}
        {props.content && (
          <p className="font-rubik text-base md:text-lg text-black text-left">
            {props.content}
          </p>
        )}
      </div>
    </div>
  );
}
