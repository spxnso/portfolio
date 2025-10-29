import { getAuthorByUsername } from "@/lib/sanity.query";

export default async function getSiteAuthor() {
  return await getAuthorByUsername("spxnso");
}
