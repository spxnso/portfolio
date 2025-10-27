import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Full name of the author.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "username",
      title: "Username",
      description: "Username of the author.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "avatar",
      title: "Avatar",
      description: "Upload a profile photo of the author.",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      description: "Tagline of the author.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),

    defineField({
      name: "job",
      title: "Job",
      description: "Job of the author.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      description: "Location of the author.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Mail",
      description: "Mail of the author.",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Website",
      description: "Optional personal website or portfolio link.",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar",
    },
  },
});
