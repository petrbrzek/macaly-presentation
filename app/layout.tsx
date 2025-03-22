import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Sans, DM_Serif_Text } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const dmSerifText = DM_Serif_Text({ 
  weight: ["400"],
  subsets: ["latin"], 
  variable: "--font-dm-serif" 
});

export const metadata: Metadata = {
  title: "Macaly Presentation",
  description: "A beautiful presentation about Macaly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${dmSerifText.variable} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}