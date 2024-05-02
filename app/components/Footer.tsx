import Image from "next/image";
import logo from "../logo.png";

export default function Footer() {
  return (
    <footer className="py-4 w-full relative flex justify-between items-center bg-red gap-2 px-6 text-black z-50">
      <div>
        <h1 className="font-domine font-semibold text-2xl">
          LHS Studio 74 Drama
        </h1>
        <h2 className="font-rubik font text-lg">
          International Thespian Society Troupe #4676
        </h2>
        <h3 className="text-base">
          Copyright © 2024. All Rights Reserved. Website developed by{" "}
          <a
            className="underline underline-offset-2 hover:text-yellow transition-colors duration-300"
            href="https://snehilkakani.me"
            rel="noopener noreferrer"
            target="_blank"
          >
            Snehil Kakani
          </a>
          .
        </h3>
      </div>
      <Image
        src={logo}
        alt="Lynbrook Drama"
        className="w-20 h-20 aspect-square"
      />
    </footer>
  );
}
