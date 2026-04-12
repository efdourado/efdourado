import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  title: "Eduardo Dourado | Software Engineer",
  description: "I'm a Full Stack Software Engineer focused on building end-to-end solutions. I design scalable, secure systems, aiming for continuous growth while identifying business needs and system bottlenecks.",
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