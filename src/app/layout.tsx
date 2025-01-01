import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeAIgent - AI-Powered Development Acceleration",
  description: "Transform Trello cards into code implementations with AI. Accelerate development by automatically generating scaffolded code that follows your team's patterns and conventions.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: ["AI development", "code generation", "Trello integration", "development automation", "code scaffolding"],
  openGraph: {
    title: "CodeAIgent - AI-Powered Development Acceleration",
    description: "Transform Trello cards into code implementations with AI",
    type: "website",
    url: "https://codeaigent.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="antialiased bg-gradient-to-b from-white to-gray-50">
        {children}
      </body>
    </html>
  );
}
