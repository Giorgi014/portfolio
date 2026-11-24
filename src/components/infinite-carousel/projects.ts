import type { StaticImageData } from "next/image";
import {
  CyberSite,
  GuessNumber,
  PigGame,
  RegForm,
  Road,
  Stygar,
  TextAnimation,
  WeatherApp,
} from "@/assets/img/websites";

export type ProjectImage = {
  id: string;
  src: StaticImageData;
  alt: string;
};

export const projectImgs: ProjectImage[] = [
  { id: "cyber-site", src: CyberSite, alt: "Cyber site project" },
  { id: "guess-number", src: GuessNumber, alt: "Guess the number game" },
  { id: "pig-game", src: PigGame, alt: "Pig game" },
  { id: "reg-form", src: RegForm, alt: "Registration form" },
  { id: "road", src: Road, alt: "Road online store" },
  { id: "stygar", src: Stygar, alt: "Stygar project" },
  { id: "text-animation", src: TextAnimation, alt: "Text animation project" },
  { id: "weather-app", src: WeatherApp, alt: "Weather app" },
];
