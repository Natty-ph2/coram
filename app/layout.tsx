import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vera Investment Group",
  icons: {
    icon: "/veraicon.png",
    shortcut: "/veraicon.png",
    apple: "/veraicon.png",
  },
  description: "Vera Investment Group is a conglomerate of diverse businesses passionate about transforming lives, helping our community, and making a lasting impact. Our mission is to serve and inspire positive change in our community.",
  keywords: [
    "Vera Investment Group",
    "Vera",
    "Investment",
    "Group",
    "Vera Investment",
    "Vera Group",
    "Vera Investment Group",
  ]
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
