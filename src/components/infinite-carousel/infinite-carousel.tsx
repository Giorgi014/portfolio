import { CarouselRow } from "./carousel-row";
import { projectImgs } from "./projects";

const reversedImgs = [...projectImgs].reverse();

export const InfiniteCarousel = () => {
  return (
    <div className="relative z-10 my-12 -mx-5 flex w-[calc(100%+2.5rem)] flex-col gap-5 overflow-hidden">
      <CarouselRow images={projectImgs} direction="left" />
      <CarouselRow images={reversedImgs} direction="right" />
    </div>
  );
};
