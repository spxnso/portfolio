"use client";

import {
  GithubLogoIcon,
  DiscordLogoIcon,
  LinkedinLogoIcon,
  SteamLogoIcon,
  TwitterLogoIcon,
  FacebookLogoIcon,
  WhatsappLogoIcon,
  RedditLogoIcon,
  EnvelopeIcon,
  LinkIcon,
  LinkSimpleIcon,
  YoutubeLogoIcon,
  CalendarDotIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  CaretDownIcon,
  CaretUpIcon,
  DotsThreeIcon,
  XIcon,
  NoteIcon,
  UserIcon,
  FolderOpenIcon,
  DetectiveIcon,
  FileCodeIcon,
  CopyIcon,
  ChatCircleIcon,
  QuestionIcon,
  WarningIcon,
  WarningCircleIcon,
  InfoIcon,
  CheckCircleIcon,
  HouseIcon,
  ArrowSquareOutIcon,
} from "@phosphor-icons/react";
import { FaNpm } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";

export const Github = GithubLogoIcon;
export const Discord = DiscordLogoIcon;
export const Linkedin = LinkedinLogoIcon;
export const Npm = FaNpm;
export const Steam = SteamLogoIcon;
export const Signal = FaSignalMessenger;
export const X = TwitterLogoIcon;
export const Facebook = FacebookLogoIcon;
export const Whatsapp = WhatsappLogoIcon;
export const Reddit = RedditLogoIcon;
export const Envelope = EnvelopeIcon;
export const Link = LinkIcon;
export const ExternalLink = ArrowSquareOutIcon;
export const Youtube = YoutubeLogoIcon;
export const Calendar = CalendarDotIcon;
export const Clock = ClockIcon;
export const Search = MagnifyingGlassIcon;
export const Check = CheckIcon;
export const ChevronDown = CaretDownIcon;
export const ChevronUp = CaretUpIcon;
export const Menu = DotsThreeIcon;
export const XMark = XIcon;
export const Note = NoteIcon;
export const User = UserIcon;
export const FolderOpen = FolderOpenIcon;
export const UserSecret = DetectiveIcon;
export const FileCode = FileCodeIcon;
export const Copy = CopyIcon;
export const Comment = ChatCircleIcon;
export const Question = QuestionIcon;
export const Warning = WarningIcon;
export const Alert = WarningCircleIcon;
export const Info = InfoIcon;
export const CheckCircle = CheckCircleIcon;
export const Home = HouseIcon;

const Icons = {
  Github,
  Discord,
  Linkedin,
  Npm,
  Steam,
  Signal,
  X,
  Facebook,
  Whatsapp,
  Reddit,
  Envelope,
  Link,
  ExternalLink,
  Youtube,
  Calendar,
  Clock,
  Search,
  Check,
  ChevronDown,
  ChevronUp,
  Menu,
  XMark,
  Note,
  User,
  FolderOpen,
  UserSecret,
  FileCode,
  Copy,
  Comment,
  Question,
  Warning,
  Alert,
  Info,
  CheckCircle,
  Home,
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
