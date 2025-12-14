import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Anil George",
  description:
    "Software engineering portfolio of Andrew Anil George. NJIT computer science student with experience at NASA and Honeywell, focused on building clean, reliable software.",
  keywords: [
    "Andrew Anil George",
    "software engineer",
    "computer science",
    "NJIT",
    "frontend",
    "backend",
    "NASA",
    "Honeywell",
  ],
  authors: [{ name: "Andrew Anil George" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
