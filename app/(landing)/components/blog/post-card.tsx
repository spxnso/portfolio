import Icons from "@/components/utils/icons";
import { PostType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

export interface PostCardProps {
  post: PostType;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        key={post.title}
        className="group flex flex-col overflow-hidden rounded-md border border-border  hover:shadow-lg transition-all duration-200"
      >
        <div className="w-full h-48 overflow-hidden border-b border-border">
          <Image
            src={post.coverImage.image}
            width={120}
            height={120}
            alt={post.coverImage.alt as string}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-5 flex flex-col flex-1 gap-2">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-3 border-t border-border/50">
            <span className="flex items-center gap-1">
              <Icons.Calendar className="w-3 h-3" />
              {formatDate(post.publishedAt)}
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Icons.Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
