"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizProps {
  question: string;
  options: QuizOption[];
  solution?: string;
}

export default function Quiz({ question, options, solution }: QuizProps) {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index: number) => {
    if (submitted) return;
    setSelectedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const handleSubmit = () => {
    if (selectedIndices.length > 0) setSubmitted(true);
  };

  const isAllCorrect =
    submitted &&
    selectedIndices.length > 0 &&
    selectedIndices.every((i) => options[i].isCorrect) &&
    options.filter((o) => o.isCorrect).length === selectedIndices.length;

  return (
    <Accordion type="single" collapsible className="mb-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base sm:text-lg">
          {question}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4">
            {options.map((opt, index) => {
              const isSelected = selectedIndices.includes(index);
              const isCorrect = opt.isCorrect;

              return (
                <li
                  key={index}
                  className={cn(
                    "p-2 border rounded-md cursor-pointer transition-colors",
                    {
                      "bg-muted": isSelected && !submitted,
                      " border-green-500 text-green-500":
                        submitted && isCorrect,
                      "d border-red-500 text-red-500":
                        submitted && isSelected && !isCorrect,
                    },
                  )}
                  onClick={() => handleSelect(index)}
                >
                  {opt.text}
                </li>
              );
            })}
          </ul>

          <Button
            className="mt-4 rounded-md"
            onClick={handleSubmit}
            disabled={submitted || selectedIndices.length === 0}
          >
            Submit
          </Button>

          {submitted && (
            <div className="mt-4">
              <p className="font-bold text-base sm:text-lg">
                {isAllCorrect ? "✅ Correct!" : "❌ Wrong!"}
              </p>

              {solution && <div className="mt-2 text-sm">{solution}</div>}
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
