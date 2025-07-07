import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deepanshu - MERN & Next.js Developer",
  description:
    "Full-stack developer specializing in MERN stack and Next.js. Creating exceptional digital experiences with modern web technologies.",
  keywords: "Full Stack Developer, MERN Stack, Next.js, React, Node.js, MongoDB, TypeScript, Web Development",
  authors: [{ name: "Deepanshu" }],
  creator: "Deepanshu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepanshu.dev",
    title: "Deepanshu - MERN & Next.js Developer",
    description:
      "Full-stack developer specializing in MERN stack and Next.js. Creating exceptional digital experiences with modern web technologies.",
    siteName: "Deepanshu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deepanshu - MERN & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu - MERN & Next.js Developer",
    description:
      "Full-stack developer specializing in MERN stack and Next.js. Creating exceptional digital experiences with modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@deepanshu_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
