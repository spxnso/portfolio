import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

export interface CustomPortableImageProps {
  value: {
    alt: string;
    caption: string;
  };
}
export default function CustomPortableImage({
  value,
}: CustomPortableImageProps) {
  return (
    <figure>
      <Image
        className="rounded-md object-cover w-full max-h-120 border duration-300"
        src={urlFor(value).url()}
        alt={value.alt}
        loading="lazy"
        width={1920}
        height={1080}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        blurDataURL={urlFor(value).blur(10).quality(10).url()}
      />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-muted-foreground">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
