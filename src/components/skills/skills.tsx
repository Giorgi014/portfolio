import { SkillsCarousel } from "./skills-carousel";

export const Skills = () => {
  return (
    <div className="relative w-full">
      <h2 className="w-full text-center text-[clamp(3rem,13vw,9rem)] leading-[0.85] font-league-spartan-black tracking-tight text-black">
        Skills
      </h2>
      <SkillsCarousel />
    </div>
  );
};
