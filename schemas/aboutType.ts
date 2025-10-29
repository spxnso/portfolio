import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const techItemType = defineType({
  name: "techItem",
  title: "Tech Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
  ],
});

export const aboutType = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "resume",
      title: "Resume File",
      type: "file",
      description: "Upload your resume (PDF preferred).",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "array",
      description: "List your favorite coding languages.",
      of: [{ type: "techItem" }],
    }),
    defineField({
      name: "frameworks",
      title: "Frameworks",
      type: "array",
      description: "List your favorite frameworks.",
      of: [{ type: "techItem" }],
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      description: "List your favorite tools.",
      of: [{ type: "techItem" }],
    }),
    defineField({
      name: "pageContent",
      title: "Page Content",
      type: "blockContent",
      description: "Main content for the About page.",
    }),
  ],
  preview: {
    select: {
      title: "pageContent",
      media: "profileImage",
    },
    prepare({ media }) {
      return {
        title: "About Page",
        media,
      };
    },
  },
});
