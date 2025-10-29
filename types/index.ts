import { PortableTextBlock } from "next-sanity";

export type AboutTechItemType = {
  title: string;
  description: string;
};
export type AboutType = {
  _id: string;
  profileImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  resume?: {
    url: string;
  };
  languages: AboutTechItemType[];
  frameworks: AboutTechItemType[];
  tools: AboutTechItemType[];
  pageContent: PortableTextBlock[];
};

export type ImageType = {
  image: string;
  alt: string | null;
  lqip: string;
};

export type CategoryType = {
  _id: string;
  title: string;
  slug: string;
  description: string;
};

export type AuthorType = {
  _id: string;
  name: string;
  username: string;
  avatar: ImageType;
  tagline: string;
  bio: PortableTextBlock[];
  traits: string[];
  job: string;
  location: string;
  email?: string;
  website?: string;
  socials: {
    platform: string;
    url: string;
  }[];
};

export type PostType = {
  _id: string;
  image: string | Blob | undefined;
  title: string;
  excerpt: string;
  coverImage: ImageType;
  slug: string;
  author: AuthorType;
  featured: boolean;
  tags: string[];
  category: CategoryType;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  body: PortableTextBlock[];
};

export type ProjectType = {
  _id: string;
  name: string;
  description: string;
  slug: string;
  featured: boolean;
  coverImage: ImageType;
  icon: ImageType;
  author: AuthorType;
  tags: string[];
  github?: string;
  liveDemo?: string;
  body: PortableTextBlock[];
};
