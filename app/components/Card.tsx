import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Card(props: {
  image: string | StaticImport;
  title: string;
  content: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl group shadow-md flex flex-col relative justify-start items-center bg-white bg-opacity-70 backdrop-blur-md overflow-hidden">
      <div className="relative min-h-[calc(20vw)] w-full z-0">
        <Image
          src={props.image}
          fill
          alt={props.title}
          className="object-cover object-center"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h1 className="font-domine text-3xl text-black font-bold text-center">
          {props.title}
        </h1>
        {props.subtitle && (
          <h2 className="font-rubik text-red font-semibold text-center text-xl">
            {props.subtitle}
          </h2>
        )}
        <p className="font-rubik text-lg text-black text-center">
          {props.content}
        </p>
      </div>
    </div>
  );
}
