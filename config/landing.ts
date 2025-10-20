import { FaUser, FaFolderOpen, FaUserSecret } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";

export const landingConfig = {
  navbar: {
    title: "spxnso",
    items: [
      { title: "About", icon: FaUser, href: "about" },
      { title: "Projects", icon: FaFolderOpen, href: "projects" },
      { title: "Blog", icon: FaNoteSticky, href: "blog" },
      { title: "Guestbook", icon: FaUserSecret, href: "guestbook" },
    ],
  },
  hero: {
    title: "Evann Borde",
    description: `I'm Evann Borde, also known as spxnso, a student and aspiring cybersecurity engineer from France. Passionate about technology and digital creation, I'm constantly learning and exploring new fields to strengthen my skills and broaden my knowledge in cybersecurity, software development, and IT.`,
  },
};
