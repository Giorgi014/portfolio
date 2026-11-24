import PfpImage from "@/assets/img/eren.png";
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <div className="relative aspect-[736/764] w-full max-w-125 justify-self-center">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="liquid-blob" clipPathUnits="objectBoundingBox">
            <path d="M0.16,0.10 C0.30,-0.02 0.50,0.06 0.62,0.14 C0.74,0.22 0.92,0.06 0.99,0.26 C1.04,0.42 0.94,0.50 0.98,0.64 C1.02,0.80 0.88,0.90 0.74,0.94 C0.60,0.98 0.50,0.90 0.36,0.97 C0.20,1.04 0.04,0.90 0.02,0.76 C0.00,0.62 0.10,0.56 0.03,0.44 C-0.04,0.30 0.02,0.18 0.16,0.10 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="size-full bg-gradient-to-b from-neutral-100 to-neutral-500"
        style={{ clipPath: "url(#liquid-blob)" }}
      >
        <Image
          src={PfpImage}
          alt=""
          className="size-full object-cover"
          priority
        />
      </div>
    </div>
  );
};
