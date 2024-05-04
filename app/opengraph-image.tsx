import { ImageResponse } from "next/og";
import Home from "./page";
import SpecialWord from "./components/SpecialWord";

export default async function GET() {
  return new ImageResponse(
    (
      <div
        style={{ display: "flex" }}
        className="flex gap-3 flex-col items-center justify-center mt-10"
      >
        <h1 className="font-domine font-extrabold text-center text-6xl text-black">
          A Place For <SpecialWord period>Everyone</SpecialWord>
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
    ),
    { height: 1080, width: 1920 }
  );
}
