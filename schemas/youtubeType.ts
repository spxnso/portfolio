import Icons from "@/components/utils/icons";
import { defineField, defineType } from "sanity";

export const youtubeType = defineType({
  name: "youtube",
  title: "Youtube Video",
  type: "object",
  icon: Icons.Youtube,
  fields: [
    defineField({
      name: "url",
      title: "Youtube Video",
      type: "url",
    }),
    { name: "autoplay", type: "boolean", initialValue: false },
    { name: "controls", type: "boolean", initialValue: true },
  ],
});
