import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { Navbar } from "@/components/shared";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const revalidate = 30; // revalidates the page every 30 seconds

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo Journal Blog",
  description:
    "Discover the codebase for Echo Journal, a user-friendly platform for creating and sharing compelling blog content. With a modern stack including NextJs, Tailwind, and Sanity, this repository provides the foundation for a seamless blogging experience. Join us in simplifying online content creation and fostering meaningful connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="w-3/4 mx-auto px-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
