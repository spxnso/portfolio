import { groq } from "next-sanity";
import { sanityFetch } from "./sanity.live";
import { PostType, ProjectType } from "@/types";

// TODO: Category

const postData = `{
  _id,
  title,
  excerpt,
  coverImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  "slug": slug.current,
  author->{
    _id,
    name,
    username,
    avatar {
      "image": asset->url,
      "lqip": asset->metadata.lqip,
      alt,
    },
    tagline,
    bio,
    job,
    location,
    email,
    website,
  },
  featured,
  tags,
  category->{
    _id,
    title,
    "slug": slug.current,
    description
  },
  publishedAt,
  updatedAt,
  readTime,
  body,
}`;

export const postQuery = groq`*[_type == "post"] | order(publishedAt desc) ${postData}`;
export const featuredPostsQuery = groq`*[_type == "post" && featured == true] | order(publishedAt desc) ${postData}`;
export const recentPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) [0...5] ${postData}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] ${postData}`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] ${postData}`;

export const postQueryByAuthor = groq`*[_type == "post" && author->slug.current == $slug] ${postData}`;

export const postQueryByTag = groq`*[_type == "post" && $postTag in tags] | order(publishedAt desc) ${postData}`;

export const getPosts = async () => {
  const result = await sanityFetch({
    query: postQuery,
    params: {},
    tags: ["post", "author", "category"],
  });
  return result.data as PostType[];
};

export async function getFeaturedPosts() {
  return sanityFetch({
    query: featuredPostsQuery,
    tags: ["post"],
  });
}

export async function getRecentPosts() {
  return sanityFetch({
    query: recentPostsQuery,
    tags: ["post"],
  });
}

export const getPostBySlug = async (slug: string) => {
  const result = await sanityFetch({
    query: postQueryBySlug,
    params: { slug },
    tags: ["post", "author", "category"],
  });

  return result.data as PostType;
};

export const getPostsByCategory = async (slug: string) => {
  const result = await sanityFetch({
    query: postQueryByCategory,
    params: { slug },
    tags: ["post", "category"],
  });

  return result.data as PostType[];
};

export const getPostsByAuthor = async (slug: string) => {
  const result = await sanityFetch({
    query: postQueryByAuthor,
    params: { slug },
    tags: ["post", "author"],
  });

  return result.data as PostType[];
};

export async function getPostsByTag(postTag: string) {
  return sanityFetch({
    query: postQueryByTag,
    params: { postTag },
    tags: ["post"],
  });
}

const projectData = `{
  _id,
  name,
  description,
  "slug": slug.current,
  featured,
  coverImage{
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  author->{
    _id,
    name,
    username,
    avatar {
      "image": asset->url,
      "lqip": asset->metadata.lqip,
      alt,
    },
    tagline,
    bio,
    job,
    location,
    email,
    website,
  },
  tags,
  github,
  liveDemo,
  body
}`;

export const projectQuery = groq`*[_type == "project"] | order(_createdAt desc) ${projectData}`;
export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(_createdAt desc) ${projectData}`;
export const projectQueryBySlug = groq`*[_type == "project" && slug.current == $slug][0] ${projectData}`;
export const projectQueryByAuthor = groq`*[_type == "project" && author->slug.current == $slug] ${projectData}`;
export const projectQueryByTag = groq`
  *[_type == "project" && $projectTag in tags] ${projectData}
`;

export const getProjects = async () => {
  const result = await sanityFetch({
    query: projectQuery,
    params: {},
    tags: ["project"],
  });

  return result.data as ProjectType[];
};

export async function getFeaturedProjects() {
  const result = await sanityFetch({
    query: featuredProjectsQuery,
    tags: ["project"],
  });
  return result.data as ProjectType[];
}

export const getProjectBySlug = async (slug: string) => {
  const result = await sanityFetch({
    query: projectQueryBySlug,
    params: { slug },
    tags: ["project"],
  });

  return result.data as ProjectType;
};

export const getProjectsByAuthor = async (slug: string) => {
  const result = await sanityFetch({
    query: projectQueryByAuthor,
    params: { slug },
    tags: ["project", "author"],
  });

  return result.data as ProjectType[];
};

export const getProjectsByTag = async (projectTag: string) => {
  const result = await sanityFetch({
    query: projectQueryByTag,
    params: { projectTag },
    tags: ["project"],
  });

  return result.data as ProjectType[];
};
