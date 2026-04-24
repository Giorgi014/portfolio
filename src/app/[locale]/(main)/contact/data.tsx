import { MailIcon } from "@/assets/img/icons/mail";
import { GitHubIcon } from "@/assets/img/icons/github";
import { LinkedInIcon } from "@/assets/img/icons/linkedin";
import { ContactLink } from "@/components";

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
