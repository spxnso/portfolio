import NextImage, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  lqip?: string;
}

export default function Image({ lqip, ...props }: CustomImageProps) {
  return (
    <NextImage
      {...props}
      fill={props.fill ?? true}
      quality={props.quality ?? 100}
      placeholder={props.placeholder ?? (lqip ? "blur" : "empty")}
      blurDataURL={props.blurDataURL ?? lqip ?? ""}
      className={props.className ?? "rounded-md border object-cover"}
    />
  );
}
