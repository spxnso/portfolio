import { defineType, defineField } from "sanity";
import Icons from "@/components/utils/icons";

export const tweetType = defineType({
  name: "tweet",
  title: "Tweet Embed",
  type: "object",
  icon: Icons.X,
  fields: [
    defineField({
      name: "url",
      title: "Tweet URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { url: "url" },
    prepare({ url }) {
      return { title: "Tweet", subtitle: url };
    },
  },
});
