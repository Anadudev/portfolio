import type { Metadata } from "next";
import Root from "@/app/components/root";
// react-tooltip injection
import 'react-tooltip/dist/react-tooltip.css'



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
        <Root >
            {children}
        </Root >
    </html>
  );
}
