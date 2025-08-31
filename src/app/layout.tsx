import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  title: "Eduardo Dourado | Desenvolvedor Full-Stack",
  description: "Portfólio de Eduardo Dourado, um estudante de Ciência da Computação e Desenvolvedor Full-Stack com foco em backend, construindo APIs e soluções de alto impacto",
  url: "https://efdourado.vercel.app",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Desenvolvedor Full-Stack",
    "Backend",
    "Next.js",
    "TypeScript",
    "React",
    "Django",
    "Portfolio",
    "Eduardo Dourado",
  ],
  authors: [{ name: "Eduardo Dourado" }],
  creator: "Eduardo Dourado",
  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "Eduardo Dourado Portfolio",
  }, ], },
  
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpeg`],
    creator: "@efdourado",
  },
  
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text x='0' y='26' font-size='32' font-family='Arial' fill='black'>❍</text></svg>",
  
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