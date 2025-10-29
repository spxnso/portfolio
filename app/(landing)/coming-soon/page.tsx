import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Icons from "@/components/utils/icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import H1 from "@/components/elements/h1";
import Main from "@/components/elements/main";
import P from "@/components/elements/p";

export default function ComingSoon() {
  return (
    <Main className="text-center flex flex-col p-4 gap-4">
      <Spinner className="mx-auto w-16 h-16 text-primary text-center" />
      <H1 className="text-4xl font-bold">
        My portfolio is <span className="text-primary">under construction</span>
      </H1>
      <P>I&apos;m working hard to bring you something amazing!</P>

      <div className="flex gap-4 mt-4 justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href={siteConfig.authors[0].url}>Contact me</Link>
        </Button>
        <Button asChild variant="default" size="lg">
          <Link
            href="https://github.com/spxnso"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Icons.Github className="w-4 h-4" />
            See my GitHub
          </Link>
        </Button>
      </div>
    </Main>
  );
}
