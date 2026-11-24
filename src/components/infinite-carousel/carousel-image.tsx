import Image from "next/image";
import type { ProjectImage } from "./projects";

type CarouselImageProps = Pick<ProjectImage, "src" | "alt">;

export const CarouselImage = ({ src, alt }: CarouselImageProps) => {
  return (
    <div className="w-72 shrink-0 pr-4 sm:w-96 md:w-130 md:pr-5">
      <div className="relative aspect-16/10 overflow-hidden rounded-sm">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 520px, (min-width: 640px) 384px, 288px"
          loading="eager"
          className="object-cover"
        />
      </div>
    </div>
  );
};
