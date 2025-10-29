import Icons from "@/components/utils/icons";
import { defineType, defineField } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  description: "Schema defining a portfolio project entry.",
  type: "document",
  icon: Icons.FolderOpen,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Enter the name of the project.",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      description: "A brief summary or tagline of the project.",
      type: "text",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description:
        "The unique URL identifier for this project (auto-generated from the name).",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Feature project",
      type: "boolean",
      description: "Add this project to the list of feature projects.",
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      description:
        "Icon representing this project (shown in portfolio grid or header).",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      description:
        "Main image representing this project (shown in portfolio grid or header).",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      description: "Author of the project.",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description:
        "List of relevant technologies or keywords (e.g. React, Node.js).",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "github",
      title: "GitHub Repository",
      description: "Optional link to the project's GitHub repository.",
      type: "url",
    }),

    defineField({
      name: "liveDemo",
      title: "Live Demo URL",
      description: "Optional link to a live version or demo of this project.",
      type: "url",
    }),

    defineField({
      name: "body",
      title: "Body Content",
      description:
        "Full description of the project, supports rich text and markdown.",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "coverImage",
    },
  },
});
