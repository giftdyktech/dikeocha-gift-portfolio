import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider, LangProvider } from "@/lib/context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Dikeocha Gift | Full-Stack Developer",
  description:
    "Portfolio of Dikeocha Gift — Full-Stack Developer building clean, high-performance web applications.",
  keywords: ["Dikeocha Gift", "Full-Stack Developer", "Nigeria", "React", "Next.js"],
  openGraph: {
    title: "Dikeocha Gift | Full-Stack Developer",
    description: "Portfolio of Dikeocha Gift — Full-Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
