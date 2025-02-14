import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/utils/navbar";
import { siteConfig } from "@/lib/siteConfig";
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-[5.5rem] scroll-smooth">
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
