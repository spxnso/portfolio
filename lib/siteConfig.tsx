import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const siteConfig = {
  title: "spxnso",
  description:
    "A passionate developer specializing in cybersecurity, web development, and crafting efficient solutions.",
  contactLink: "https://discordapp.com/users/1157544020143255614",
  about: (
    <p className="text-muted-foreground mt-3">
      Hi, I'm spxnso — a passionate French developer who began coding at the age
      of twelve, starting with Scratch and Roblox games.
      <br />
      Fluent in both French and English, I collaborate effortlessly with teams
      across the globe. I constantly seek to expand my programming knowledge by
      exploring new languages and technologies.
      <br />
      My primary focus is on cybersecurity, where I&apos;m committed to
      protecting systems from malicious actors. I also enjoy writing and sharing
      my projects on my{" "}
      <Link
        href="https://github.com/spxnso"
        className="text-blue-500 underline"
      >
        GitHub
      </Link>
      .
    </p>
  ),
  icon: "https://github.com/spxnso.png",
  profile: {
    username: "spxnso",
    links: [
      {
        link: "https://github.com/spxnso",
        icon: FaGithub,
      },
      {
        link: "https://discordapp.com/users/1157544020143255614",
        icon: FaDiscord,
      },
      {
        link: "https://instagram.com/spxnso",
        icon: FaInstagram,
      },
    ],
  },
};
