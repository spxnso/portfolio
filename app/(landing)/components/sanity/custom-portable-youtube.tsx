import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { getYoutubeVideoId } from "@/lib/utils";

export interface CustomPortableYoutubeProps {
  value: {
    url: string;
  };
}

export default function CustomPortableYoutube({
  value,
}: CustomPortableYoutubeProps) {
  const id = getYoutubeVideoId(value.url);
  return (
    <div className="w-full">
      <HeroVideoDialog
        className="block w-full"
        animationStyle="from-center"
        videoSrc={`https://youtube.com/embed/${id}`}
        thumbnailSrc={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
