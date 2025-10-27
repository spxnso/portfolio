import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Icons from "@/components/utils/icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ComingSoon() {
  return (
    <main className="text-center flex flex-col p-4 gap-4">
      <Spinner className="mx-auto w-16 h-16 text-primary text-center" />
      <h1 className="text-4xl font-bold">
        My portfolio is <span className="text-primary">under construction</span>
      </h1>
      <p>I&apos;m working hard to bring you something amazing!</p>

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
    </main>
  );
}
