import type { Metadata } from "next";
import Root from "@/app/components/root";
import localFont from "next/font/local";
import "./globals.css";
// react-tooltip injection
import 'react-tooltip/dist/react-tooltip.css'



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export const metadata: Metadata = {
  title: "Anadu Portfolio",
  description: "Anadu Godwin software developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 dark:bg-slate-950 max-w-[96rem] mx-auto`}
      >
        <Root >
          {children}
        </Root >
      </body>
    </html>
  );
}
