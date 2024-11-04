import type { Metadata } from "next";
import Root from "@/app/components/root";
import "./globals.css";
// react-tooltip injection
import 'react-tooltip/dist/react-tooltip.css'





export const metadata: Metadata = {
  title: "Anadu Godwin | Full-Stack Web Developer",
  description: "Anadu Godwin a skilled full-stack web developer with a passion for crafting elegant and efficient web applications. Explore his portfolio of projects built with React, Node.js, and other cutting-edge technologies.",
  keywords: "Anadu Godwin, Software Engineer, Full-Stack Web Developer, Web Developer,Python, Django, Typescript, Next.js, React, Node.js, Portfolio, Projects, Skills, Resume, Contact",
  authors: [{ name: "Anadu Godwin" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Root >
        {children}
      </Root >
    </html>
  );
}
