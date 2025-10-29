import { Callout, CalloutTitle } from "@/components/ui/callout";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "next-sanity";

export interface CustomPortableCalloutProps {
  value: {
    style: "info" | "success" | "warning" | "error";
    content: PortableTextBlock[];
  };
}

export default function CustomPortableCallout({
  value,
}: CustomPortableCalloutProps) {
  return (
    <Callout variant={value.style} className="my-6">
      <CalloutTitle>
        <PortableText value={value.content}></PortableText>
      </CalloutTitle>
    </Callout>
  );
}
