import Image from "next/image";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { useEffect, useRef } from "react";
import SpecialWord from "./components/SpecialWord";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <div className="flex gap-3 flex-col items-center justify-center min-h-80">
        <h1 className="font-domine font-extrabold gap-[0.35ch] flex text-6xl text-black">
          A Place For
          <SpecialWord period>Everyone</SpecialWord>
        </h1>
        <p className="font-rubik max-w-[100ch] text-lg text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nisi
          earum voluptatibus accusantium excepturi fuga dicta nihil, amet fugit
          corrupti rerum, voluptatum suscipit, quod assumenda est repellendus et
          quibusdam. Itaque! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ipsa nisi earum voluptatibus accusantium excepturi fuga dicta
          nihil, amet fugit corrupti rerum, voluptatum suscipit, quod assumenda
          est repellendus et quibusdam. Itaque!
        </p>
        <h2 className="font-rubik text-4xl text-black">
          Wednesday Lunch @ Room 74
        </h2>
      </div>
      <div className="grid gap-5 grid-cols-3">
        <Card
          title="Productions"
          content="Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in."
          image="/placeholder.webp"
        />
        <Card
          title="Improv"
          content="Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in."
          image="/improv.jpg"
        />
        <Card
          title="Festivals"
          content="Pariatur proident excepteur nisi labore. Esse fugiat sit mollit ut id cillum nostrud. Eiusmod fugiat ea cillum ad ipsum ullamco officia irure in mollit incididunt cupidatat reprehenderit officia. Sunt dolor incididunt commodo dolor ut sit. Cupidatat fugiat occaecat elit voluptate fugiat eu duis. Eu mollit adipisicing magna in."
          image="/lenaea4.jpg"
        />
      </div>
    </main>
  );
}
