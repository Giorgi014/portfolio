import type { StaticImageData } from "next/image";
import {
  CyberSite,
  OaklineStudio,
  RegForm,
  Road,
  Stygar,
  TextAnimation,
  VeldStudio,
  Void,
} from "@/assets/img/websites";

export type ProjectImage = {
  id: string;
  src: StaticImageData | string;
  alt: string;
};

export const projectImgs: ProjectImage[] = [
  { id: "cyber-site", src: CyberSite, alt: "Cyber site project" },
  { id: "reg-form", src: RegForm, alt: "Registration form" },
  { id: "road", src: Road, alt: "Road online store" },
  { id: "stygar", src: Stygar, alt: "Stygar project" },
  { id: "text-animation", src: TextAnimation, alt: "Text animation project" },
  { id: "oakline-studio", src: OaklineStudio, alt: "Oakline Studio project" },
  { id: "veld-studio", src: VeldStudio, alt: "Veld Studio project" },
  { id: "void", src: Void, alt: "VOID fashion project" },
];
