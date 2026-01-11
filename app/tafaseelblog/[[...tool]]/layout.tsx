import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../globals.css";
import { ThemeProvider } from "next-themes";

const font = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tafseel | Architecture & Engineering",
    template: "%s | Tafseel",
  },
  description:
    "Tafseel is an architecture and engineering company providing innovative architectural design and engineering services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
