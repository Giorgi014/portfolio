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
    src: "https://10x-final-project.vercel.app/",
  },
  {
    id: 1,
    img: WeatherApp,
    project: "PRJ_02",
    key: "prj_02",
    category: "web",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    src: "https://weather-next-app-amber.vercel.app/",
  },
  {
    id: 2,
    img: TextAnimation,
    project: "PRJ_03",
    key: "prj_03",
    category: "creative",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    src: "https://text-animation-nu.vercel.app/",
  },
  {
    id: 3,
    img: RegForm,
    project: "PRJ_04",
    key: "prj_04",
    category: "creative",
    technologies: ["HTML", "CSS", "Vercel"],
    src: "https://login-form-ten-sandy.vercel.app/",
  },
  {
    id: 4,
    img: Calculator,
    project: "PRJ_05",
    key: "prj_05",
    category: "utility",
    technologies: ["React", "CSS", "JavaScript", "Vercel"],
    src: "https://calculator-phi-snowy.vercel.app/",
  },
  {
    id: 5,
    img: GuessNumber,
    project: "PRJ_06",
    key: "prj_06",
    category: "game",
    technologies: ["HTML", "SCSS", "JavaScript", "Jest", "Vercel"],
    src: "https://guess-number-one-wine.vercel.app/",
  },
  {
    id: 6,
    img: PigGame,
    project: "PRJ_07",
    key: "prj_07",
    category: "game",
    technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "Vercel"],
    src: "https://pig-game-ts.vercel.app/",
  },
];
