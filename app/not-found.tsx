import PageHeading from "./(landing)/components/elements/page-heading";
import LandingLayout from "./(landing)/layout";
import Link from "next/link";
import Icons from "@/components/utils/icons";
import P from "@/components/elements/p";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Section from "@/components/elements/section";

export default function NotFound() {
  return (
    <LandingLayout>
      <Section>
        <PageHeading
          title="Page Not Found"
          description="Looks like you've wandered off the path. The page you're looking for doesn't exist or may have been moved. Check out theses pages while you're there!"
        />
        <div className="space-y-4 flex flex-col">
          <Link href="/about">
            <div className=" flex items-center space-x-4 rounded-md border p-4 max-w-sm w-full hover:scale-105 transition-all duration-200 ease-in-out group">
              <Icons.User className="w-5 h-5 group-hover:text-primary transition-all" />
              <div className="flex-1 space-y-1">
                <P className="font-medium text-foreground">About</P>
                <P>
                  Learn more about who I am, what I do, and the journey that
                  shaped my passion for technology and development.
                </P>
              </div>
              <ArrowRight className="w-5 h-5"></ArrowRight>
            </div>
          </Link>
          <Link href="/projects">
            <div className=" flex items-center space-x-4 rounded-md border p-4 max-w-sm w-full hover:scale-105 transition-all duration-200 ease-in-out group">
              <Icons.FolderOpen className="w-5 h-5 group-hover:text-primary transition-all" />
              <div className="flex-1 space-y-1">
                <P className="font-medium text-foreground">Projects</P>
                <P>
                  Discover the projects I&apos;ve built — from experiments and
                  tools to full-scale applications I&apos;m proud to share.
                </P>
              </div>
              <ArrowRight className="w-5 h-5"></ArrowRight>
            </div>
          </Link>
          <Link href="/blog">
            <div className=" flex items-center space-x-4 rounded-md border p-4 max-w-sm w-full hover:scale-105 transition-all duration-200 ease-in-out group">
              <Icons.Note className="w-5 h-5 group-hover:text-primary transition-all" />
              <div className="flex-1 space-y-1">
                <P className="font-medium text-foreground">Blog</P>
                <P>
                  Read my thoughts, tutorials, and insights on development,
                  cybersecurity, and the things I&apos;m currently exploring.
                </P>
              </div>
              <ArrowRight className="w-5 h-5"></ArrowRight>
            </div>
          </Link>
        </div>
        <Link
          className="transition-all flex gap-2 group hover:text-primary"
          href="/"
        >
          <ArrowLeft className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-0.25"></ArrowLeft>{" "}
          Back to home
        </Link>
      </Section>
    </LandingLayout>
  );
}
