import CasinoImg from "@/assets/img/casinoimg.jpg";
import CyberSite from "@/assets/img/cyber.png";
import GuessNumber from "@/assets/img/guess-number.png";
import TextAnimation from "@/assets/img/text-animation.png";
import Calculator from "@/assets/img/calculator.png";
import RegForm from "@/assets/img/registration-form.png";
import WeatherApp from "@/assets/img/weather.png";
import PigGame from "@/assets/img/pig-game.png";
import { ProjectType } from "../type";

export const projects: ProjectType[] = [
  {
    id: 0,
    img: CyberSite,
    project: "PRJ_01",
    key: "prj_01",
    category: "e-commerce",
    technologies: ["React", "SCSS", "JavaScript", "Vite", "Vercel"],
  },
  {
    id: 1,
    img: GuessNumber,
    project: "PRJ_02",
    key: "prj_02",
    category: "game",
    technologies: ["HTML", "SCSS", "JavaScript", "Jest", "Vercel"],
  },
  {
    id: 2,
    img: TextAnimation,
    project: "PRJ_03",
    key: "prj_03",
    category: "creative",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    id: 3,
    img: Calculator,
    project: "PRJ_04",
    key: "prj_04",
    category: "utility",
    technologies: ["React", "CSS", "JavaScript", "Vercel"],
  },
  {
    id: 4,
    img: RegForm,
    project: "PRJ_05",
    key: "prj_05",
    category: "creative",
    technologies: ["HTML", "CSS", "Vercel"],
  },
  {
    id: 5,
    img: WeatherApp,
    project: "PRJ_06",
    key: "prj_06",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
  },
  {
    id: 6,
    img: PigGame,
    project: "PRJ_07",
    key: "prj_07",
    category: "game",
    technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "Vercel"],
  },
];
