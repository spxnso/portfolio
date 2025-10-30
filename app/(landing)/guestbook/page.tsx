import { Metadata } from "next";
import Comments from "../components/elements/comments";
import PageHeading from "../components/elements/page-heading";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Guestbook",
  };
}

export default function Guestbook() {
  return (
    <>
      <PageHeading
        title="Guestbook"
        description="Feel free to share your thoughts, suggestions, or simply say hello. Your feedback and messages are always appreciated!"
      />
      <Comments />
    </>
  );
}
