import Quiz, { QuizOption } from "@/components/ui/quiz";

export interface CustomPortableQuizProps {
  value: {
    question: string;
    options: QuizOption[];
    solution?: string;
  };
}

export default function CustomPortableQuiz({ value }: CustomPortableQuizProps) {
  return (
    <Quiz
      question={value.question}
      options={value.options}
      solution={value.solution}
    />
  );
}
