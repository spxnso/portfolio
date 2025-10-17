/* eslint-disable @next/next/no-img-element */
import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export default async function Icon() {
  return new ImageResponse(
    (
      <img
        src={siteConfig.icon}
        alt="User Avatar"
        className="w-full h-full object-cover rounded-full"
        style={{
          borderRadius: "50%",
          border: "2px solid green",
        }}
      />
    ),
    {
      ...size,
    },
  );
}
