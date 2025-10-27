import { TweetCard } from "@/components/ui/tweet-card";
import { getTweetId } from "@/lib/utils";

export interface CustomPortableTweetProps {
  value: { url: string };
}

export default function CustomPortableTweet({
  value,
}: CustomPortableTweetProps) {
  const tweetId = getTweetId(value.url);
  if (!tweetId) return null;
  return <TweetCard id={tweetId} />;
}
