/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineType } from "sanity";

export const calloutType = defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  fields: [
    {
      name: "style",
      title: "Callout Type",
      type: "string",
      options: {
        list: [
          { title: "Info", value: "info" },
          { title: "Tip", value: "tip" },
          { title: "Warning", value: "warning" },
          { title: "Error", value: "error" },
        ],
        layout: "radio",
      },
      initialValue: "info",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      style: "style",
      content: "content",
    },
    prepare(selection) {
      const { style, content } = selection;
      const text =
        content?.[0]?.children?.map((c: any) => c.text).join("") || "Callout";
      return {
        title: `${style.toUpperCase()} Callout`,
        subtitle: text.length > 50 ? text.slice(0, 50) + "…" : text,
      };
    },
  },
});
