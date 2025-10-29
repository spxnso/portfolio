import { groq } from "next-sanity";
import { sanityFetch } from "./sanity.live";
import { PostType, ProjectType, AuthorType, AboutType } from "@/types";

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
    socials
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
  const result = await sanityFetch({
    query: featuredPostsQuery,
    tags: ["post"],
  });
  return result.data as PostType[];
}

export async function getPostsByTag(postTag: string) {
  const result = await sanityFetch({
    query: postQueryByTag,
    params: { postTag },
    tags: ["post"],
  });

  return result.data as PostType[];
}

export async function getRecentPosts() {
  const result = await sanityFetch({
    query: recentPostsQuery,
    tags: ["post"],
  });

  return result.data as PostType[];
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
  icon{
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
    socials,
  },
  tags,
  github,
  liveDemo,
  body
}`;

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) ${projectData}`;
export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(_createdAt desc) ${projectData}`;
export const projectQueryBySlug = groq`*[_type == "project" && slug.current == $slug][0] ${projectData}`;
export const projectQueryByAuthor = groq`*[_type == "project" && author->slug.current == $slug] ${projectData}`;
export const projectQueryByTag = groq`
  *[_type == "project" && $projectTag in tags] ${projectData}
`;

export const getProjects = async () => {
  const result = await sanityFetch({
    query: projectsQuery,
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

const authorData = `{
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
  traits,
  job,
  location,
  email,
  website,
  socials,
}`;

export const authorsQuery = groq`*[_type == "author"] | order(name asc) ${authorData}`;

export const authorQueryById = groq`*[_type == "author" && _id == $id][0] ${authorData}`;

export const authorQueryByUsername = groq`*[_type == "author" && username == $username][0] ${authorData}`;

export const authorsQueryByLocation = groq`*[_type == "author" && location == $location] | order(name asc) ${authorData}`;

export const getAuthors = async () => {
  const result = await sanityFetch({
    query: authorsQuery,
    params: {},
    tags: ["author"],
  });

  return result.data as AuthorType[];
};

export const getAuthorById = async (id: string) => {
  const result = await sanityFetch({
    query: authorQueryById,
    params: { id },
    tags: ["author"],
  });

  return result.data as AuthorType;
};

export const getAuthorByUsername = async (username: string) => {
  const result = await sanityFetch({
    query: authorQueryByUsername,
    params: { username },
    tags: ["author"],
  });

  return result.data as AuthorType;
};

export const getAuthorsByLocation = async (location: string) => {
  const result = await sanityFetch({
    query: authorsQueryByLocation,
    params: { location },
    tags: ["author"],
  });

  return result.data as AuthorType[];
};

const aboutData = `{
  _id,
  profileImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  resume {
    "url": asset->url
  },
  languages,
  frameworks,
  tools,
  pageContent
}`;

export const aboutQuery = groq`*[_type == "about"][0] ${aboutData}`;

export const getAbout = async () => {
  const result = await sanityFetch({
    query: aboutQuery,
    tags: ["about"],
  });

  return result.data as AboutType;
};
