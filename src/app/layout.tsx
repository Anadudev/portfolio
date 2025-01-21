import type { Metadata } from "next";
import Root from "@/app/components/root";
import "./globals.css";
// react-tooltip injection
import 'react-tooltip/dist/react-tooltip.css'





export const metadata: Metadata = {
  title: "Anadu Godwin | Software Engineer",
  description: "Anadu Godwin a skilled full-stack software engineer with a passion for crafting elegant and efficient web applications. Explore his portfolio of projects built with React, Node.js, and other cutting-edge technologies.",
  keywords: "Anadu Godwin, Software Engineer, Full-Stack Web Developer, Web Developer,Python, Django, Typescript, Next.js, React, Node.js, Portfolio, Projects, Skills, Resume, Contact, AWS, Backend, frontend, Tailwind, Shadcn, Docker",
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
