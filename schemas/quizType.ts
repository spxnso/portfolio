import { defineField } from "sanity";
import Icons from "@/components/utils/icons";

export const quizType = defineField({
  name: "quiz",
  title: "Quiz",
  type: "object",
  icon: Icons.Question,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "options",
      title: "Options",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "option",
          fields: [
            defineField({
              name: "text",
              title: "Option text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "isCorrect",
              title: "Correct?",
              type: "boolean",
              initialValue: false,
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(2).max(5),
    }),
    defineField({
      name: "solution",
      title: "Solution / Explanation",
      type: "string",
      description: "Optional: explain the correct answer here",
    }),
  ],
  preview: {
    select: {
      question: "question",
    },
    prepare({ question }) {
      return {
        title: question,
      };
    },
  },
});
