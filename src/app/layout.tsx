"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutMain from "@/components/mainLayout";
import Layout from "@/components/mainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence mode="wait" key={pathName}>
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
