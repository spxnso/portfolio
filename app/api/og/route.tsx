import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";


export const runtime = "edge";

const interBold = fetch(
    new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
    try {
        const fontBold = await interBold;

        const { searchParams } = req.nextUrl;
        const title = searchParams.get("title");

        if (!title) {
            return new Response("No title provided", { status: 500 });
        }

        const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

        return new ImageResponse(
            (
                <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
                    <div tw="flex items-center">
                        <img
                            tw="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                            src="https://avatars.githubusercontent.com/u/146754550"
                            width={40}
                            height={40}
                            alt={`Avatar`}
                        />
                        <p tw="ml-2 font-bold text-2xl">Spxnso ⚜️</p>
                    </div>
                    <div tw="flex flex-col flex-1 py-10">
                        <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
                            BLOG POST
                        </div>
                        <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
                    </div>
                    <div tw="flex items-center w-full justify-between">
                        <div tw="flex text-xl">https://test</div>
                        <div tw="flex items-center text-xl">
                            <div tw="flex ml-2">github</div>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Inter",
                        data: fontBold,
                        style: "normal",
                        weight: 700,
                    },
                ],
            }
        );
    } catch (error) {
        return new Response("Failed to generate image", { status: 500 });
    }
}
