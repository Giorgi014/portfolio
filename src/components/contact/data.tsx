import { GitHubIcon, LinkedInIcon, MailIcon } from "@/assets/img/icons";
import type { ContactLink } from "@/types";

export const links: ContactLink[] = [
  {
    id: 0,
    header: "// Gmail",
    href: "mailto:giorgi.gugunava99@gmail.com",
    label: "giorgi.gugunava99@gmail.com",
    icon: <MailIcon />,
  },
  {
    id: 1,
    header: "// GitHub",
    href: "https://github.com/Giorgi014",
    label: "github.com/Giorgi014",
    icon: <GitHubIcon />,
  },
  {
    id: 2,
    header: "// LinkedIn",
    href: "https://www.linkedin.com/in/giorgi-gugunava-48a19b258/",
    label: "linkedin.com/Giorgi Gugunava",
    icon: <LinkedInIcon />,
  },
];
