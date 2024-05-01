import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function HorizontalCard(props: {
  image: string | StaticImport;
  title: string;
  content: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl group shadow-md flex flex-row relative justify-start items-center bg-white bg-opacity-70 backdrop-blur-md overflow-hidden">
      <div className="relative aspect-square w-full z-0">
        <Image
          src={props.image}
          fill
          alt={props.title}
          className="object-cover object-center"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h1 className="font-domine text-4xl text-black font-bold text-left">
          {props.title}
        </h1>
        {props.subtitle && (
          <h2 className="font-rubik text-red font-semibold text-left text-xl">
            {props.subtitle}
          </h2>
        )}
        <p className="font-rubik text-lg text-black text-left">
          {props.content}
        </p>
      </div>
    </div>
  );
}
