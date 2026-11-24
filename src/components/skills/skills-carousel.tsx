import { skills } from "./skills-icons";

export const SkillsCarousel = () => {
  return (
    <div className="w-full my-15 overflow-hidden">
      <div className="flex w-max animate-marquee-left will-change-transform motion-reduce:animate-none">
        {[0, 1].map((copy) =>
          skills.map((skill) => (
            <div
              key={`${copy}-${skill.id}`}
              aria-hidden={copy === 1}
              className="mx-3 flex size-32 shrink-0 items-center justify-center text-black [&_svg]:size-32 sm:mx-4 sm:size-40 sm:[&_svg]:size-40 md:mx-5 md:size-50 md:[&_svg]:size-50"
            >
              {skill.icon}
            </div>
          )),
        )}
      </div>
    </div>
  );
};
