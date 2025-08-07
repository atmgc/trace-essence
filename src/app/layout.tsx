import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclid = localFont({
  src: [
    {
      path: "../../public/font/Euclid-Circular-B-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Euclid-Circular-B-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Euclid-Circular-B-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Euclid-Circular-B-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Euclid-Circular-B-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title:
    "Trace Essence - Transformational coaching experiences for clarity, confidence, and personal growth.",
  description:
    "Transformational coaching experiences for clarity, confidence, and personal growth.",
  keywords: [
    "Trace Essence",
    "Transformational coaching",
    "Personal growth",
    "Clarity",
    "Confidence",
    "Coaching experiences",
    "Self-discovery",
    "Life coaching",
    "Executive coaching",
    "Leadership development",
    "Mindset shift",
    "Goal setting",
    "Personal development",
    "Well-being",
    "Empowerment",
    "Growth mindset",
    "Potential realization",
    "Holistic coaching",
    "Inner peace",
    "Success coaching",
  ],
  authors: [{ name: "Chidubem Agulue", url: "https://chidubem.me" }],
  creator: "Chidubem Agulue",
  publisher: "Chidubem Agulue",
  openGraph: {
    title:
      "Trace Essence - Transformational coaching experiences for clarity, confidence, and personal growth.",
    description:
      "Transformational coaching experiences for clarity, confidence, and personal growth.",
    url: "https://trace-essence.vercel.app",
    siteName: "Trace Essence",
    images: [
      {
        url: "https://trace-essence.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trace Essence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Trace Essence - Transformational coaching experiences for clarity, confidence, and personal growth.",
    description:
      "Transformational coaching experiences for clarity, confidence, and personal growth.",
    images: ["https://trace-essence.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${euclid.className} antialiased`}>{children}</body>
    </html>
  );
}
