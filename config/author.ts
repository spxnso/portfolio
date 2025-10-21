import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaNpm,
  FaSteam,
} from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";

export const authorConfig = {
  name: "Evann Borde",
  username: "spxnso",
  socials: [
    {
      name: "Github",
      href: "https://github.com/spxnso",
      icon: FaGithub,
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/spxnso",
      icon: FaLinkedin,
    },
    {
      name: "Discord",
      href: "https://discordapp.com/users/1157544020143255614/",
      icon: FaDiscord,
    },
    {
      name: "Signal",
      href: "https://signal.me/#u/spxnso.144",
      icon: FaSignalMessenger,
    },
    {
      name: "Steam",
      href: "https://steamcommunity.com/profiles/76561199469207096/",
      icon: FaSteam,
    },
    {
      name: "npm",
      href: "https://www.npmjs.com/~spxnso",
      icon: FaNpm,
    },
  ],
  projects: [
    {
      title: "numworks_env",
      description: "Port of the NumWorks python environment for Python 3.x",
      href: "/projects/numworks_env",
      icon: "/assets/numworks.jpg",
    },
    {
      title: "Telemetry-Deactivation-Scripts",
      description: "Easy telemetry deactivation for Windows 11 ",
      href: "/projects/tds",
    },
    {
      title: "crackmes.one",
      description:
        "This repo contains my personal solutions to public challenges hosted on crackmes.one.",
      href: "/projects/crackmes.one",
      icon: "https://github.com/spxnso/crackmes.one/raw/master/assets/crackmes-logo.png",
    },
  ],
};
