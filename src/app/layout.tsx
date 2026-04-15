import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  title: "Eduardo Dourado | Software Engineer",
  description: "Software engineer portfolio showcasing selected full-stack, data, and AI projects.",
  url: "https://efdourado.vercel.app",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend",
    "Python",
    "TypeScript",
    "React",
    "Portfolio",
    "Eduardo Dourado",
  ],
  
  icons: "/memphis-logo.png",
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
       </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
); }
