import { Menu } from "lucide-react";
import {
  FaCalendar,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaComment,
  FaCopy,
  FaDiscord,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebook,
  FaFileCode,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaLink,
  FaLinkedin,
  FaNpm,
  FaQuestion,
  FaReddit,
  FaSearch,
  FaSteam,
  FaUser,
  FaUserSecret,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  FaNoteSticky,
  FaSignalMessenger,
  FaXmark,
  FaXTwitter,
} from "react-icons/fa6";
import {
  IoIosAlert,
  IoIosWarning,
  IoIosCheckmarkCircle,
  IoIosInformationCircle,
} from "react-icons/io";

const Icons = {
  Github: FaGithub,
  Discord: FaDiscord,
  Linkedin: FaLinkedin,
  Npm: FaNpm,
  Steam: FaSteam,
  Signal: FaSignalMessenger,
  X: FaXTwitter,
  Facebook: FaFacebook,
  Whatsapp: FaWhatsapp,
  Reddit: FaReddit,
  Envelope: FaEnvelope,
  Link: FaLink,
  ExternalLink: FaExternalLinkAlt,
  Youtube: FaYoutube,
  Calendar: FaCalendar,
  Clock: FaClock,
  Search: FaSearch,
  Check: FaCheck,
  ChevronDown: FaChevronDown,
  ChevronUp: FaChevronUp,
  Menu,
  XMark: FaXmark,
  Note: FaNoteSticky,
  User: FaUser,
  FolderOpen: FaFolderOpen,
  UserSecret: FaUserSecret,
  FileCode: FaFileCode,
  Copy: FaCopy,
  Comment: FaComment,
  Question: FaQuestion,
  Warning: IoIosWarning,
  Alert: IoIosAlert,
  Info: IoIosInformationCircle,
  CheckCircle: IoIosCheckmarkCircle,
  Home: FaHome,
};

export function ResolveIconByName(name: string) {
  const Icon = Icons[name as keyof typeof Icons];
  if (!Icon) {
    console.warn(`Icon not found: ${name}`);
    return () => null;
  }
  return Icon;
}

export default Icons;
