import { PortableTextBlock } from "next-sanity";

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
  job: string;
  location: string;
  email?: string;
  website?: string;
};

export type PostType = {
  image: string | Blob | undefined;
  _id: string;
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
  coverImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  author: AuthorType;
  tags: string[];
  github?: string;
  liveDemo?: string;
  body: PortableTextBlock[];
};
