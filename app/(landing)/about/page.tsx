import { getAbout } from "@/lib/sanity.query";
import AboutPage from "../components/pages/about-page";
import getSiteAuthor from "@/config/author";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
  };
}

export default async function About() {
  const author = await getSiteAuthor();
  const about = await getAbout();
  return <AboutPage author={author} about={about} />;
}
