import CodeBlock from "@/components/ui/code-block";

export interface CustomPortableCodeBlockProps {
  value: {
    code: string;
    language: string;
    filename: string;
  };
}

export default function CustomPortableCodeBlock({
  value,
}: CustomPortableCodeBlockProps) {
  return (
    <CodeBlock
      code={value.code}
      language={value.language}
      filename={value.filename}
    ></CodeBlock>
  );
}
