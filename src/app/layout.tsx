import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Baran Safa Taşkın — Portfolio",
  description:
    "Computer Engineering student specializing in AI & Machine Learning and Full-Stack Web Development. Based in Istanbul, Turkey.",
  keywords: [
    "Baran Safa Taşkın",
    "portfolio",
    "computer engineering",
    "AI",
    "machine learning",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Baran Safa Taşkın" }],
  openGraph: {
    title: "Baran Safa Taşkın — Portfolio",
    description:
      "AI & ML Developer · Full-Stack Web Developer · Computer Engineering Student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
