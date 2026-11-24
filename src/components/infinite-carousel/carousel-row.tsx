import { CarouselImage } from "./carousel-image";
import type { ProjectImage } from "./projects";

type CarouselRowProps = {
  images: ProjectImage[];
  direction: "left" | "right";
};

export const CarouselRow = ({ images, direction }: CarouselRowProps) => {
  const animation =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max will-change-transform motion-reduce:animate-none ${animation}`}
      >
        {[0, 1].map((copy) =>
          images.map(({ id, src, alt }) => (
            <CarouselImage
              key={`${copy}-${id}`}
              src={src}
              alt={copy === 0 ? alt : ""}
            />
          )),
        )}
      </div>
    </div>
  );
};
