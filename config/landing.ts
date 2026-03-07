// TODO: Remove this aswell
import { User, FolderOpen, Note, UserSecret } from "@/components/utils/icons";

export const landingConfig = {
  navbar: {
    title: "spxnso",
    items: [
      { title: "About", icon: User, href: "/about" },
      { title: "Projects", icon: FolderOpen, href: "/projects" },
      { title: "Blog", icon: Note, href: "/blog" },
      { title: "Guestbook", icon: UserSecret, href: "/guestbook" },
    ],
  },
};
