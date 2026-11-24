import Image from "next/image";
import Splash from "@/assets/img/tag.png";
import { SkillsCarousel } from "./skills-carousel";

export const Skills = () => {
  return (
    <div className="relative z-0 -mt-12.5 w-full bg-white pb-15 pt-27.5 [clip-path:inset(0)]">
      <Image
        src={Splash}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 h-svh w-[clamp(90%,calc(100%-(100vw-640px)/5),100%)] select-none object-cover object-center opacity-70 blur-[2px] mix-blend-multiply"
      />
      <div className="relative z-10">
        <h2 className="w-full text-center text-[clamp(3rem,13vw,9rem)] leading-[0.85] font-league-spartan-black tracking-tight text-black">
          Skills
        </h2>
        <SkillsCarousel />
      </div>
    </div>
  );
};
