import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

export default function Card(props: {
  image: string | StaticImport;
  title: string;
  content: string | ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl group shadow flex flex-col relative justify-start items-center bg-white bg-opacity-70 backdrop-blur-md overflow-hidden border border-black border-opacity-10">
      <div className="relative min-h-[50vw] md:min-h-[calc(20vw)] w-full z-0">
        <Image
          src={props.image}
          fill
          alt={props.title}
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h1 className="font-domine text-2xl md:text-3xl text-black font-bold text-center">
          {props.title}
        </h1>
        {props.subtitle && (
          <h2 className="font-rubik text-red font-semibold text-center text-lg md:text-xl">
            {props.subtitle}
          </h2>
        )}
        <p className="font-rubik text-base md:text-lg text-black text-center">
          {props.content}
        </p>
      </div>
    </div>
  );
}
