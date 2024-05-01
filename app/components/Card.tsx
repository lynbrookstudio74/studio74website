import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Card(props: {
  image: string | StaticImport;
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-2xl group shadow-sm flex flex-col relative justify-start items-center bg-white bg-opacity-70 backdrop-blur-md overflow-hidden">
      <div className="relative min-h-56 w-full z-0">
        <Image
          src={props.image}
          fill
          alt={props.title}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h1 className="font-domine text-3xl text-black font-bold text-center">
          {props.title}
        </h1>
        <p className="font-rubik text-lg text-black text-center">
          {props.content}
        </p>
      </div>
    </div>
  );
}
