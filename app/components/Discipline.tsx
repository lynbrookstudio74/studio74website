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
      className={`relative flex items-center h-40 rounded-xl bg-black overflow-hidden shadow-md justify-center ${className}`}
    >
      <Image
        src={image}
        fill
        alt={title}
        className="object-cover z-0 opacity-30 object-center"
      />
      <h1 className="font-rubik z-20 text-4xl text-center lowercase font-bold text-white">
        {title}
      </h1>
    </div>
  );
}
