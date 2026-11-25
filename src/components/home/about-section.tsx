import Image from "next/image";
import Splash from "@/assets/img/tag.png";
import { Skills } from "../skills";

export const AboutSection = () => {
  return (
    <article className="relative z-0 -mt-12.5 w-full bg-white pb-15 pt-27.5 [clip-path:inset(0)]">
      <Image
        src={Splash}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 h-svh w-[clamp(90%,calc(100%-(100vw-640px)/5),100%)] select-none object-cover object-center opacity-70 blur-[2px] mix-blend-multiply"
      />
      <div className="relative z-10">
        <Skills />
      </div>
    </article>
  );
};
