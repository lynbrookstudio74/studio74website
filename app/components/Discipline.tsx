import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Discipline({
  className,
  title,
  image,
}: {
  className?: string;
  title: string;
  image: string | StaticImport;
}) {
  return (
    <div
      className={`relative flex items-center h-[11vw] rounded-xl bg-black overflow-hidden shadow justify-center ${className}`}
    >
      <Image
        src={image}
        fill
        alt={title}
        className="object-cover brightness-105 z-0 opacity-40 object-center"
      />
      <h1 className="font-rubik z-20 text-4xl text-center lowercase font-bold text-white">
        {title}
      </h1>
    </div>
  );
}
