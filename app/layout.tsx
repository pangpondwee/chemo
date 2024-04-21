import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/themeProvider";
import { ModeToggle } from "@/components/modeToggle";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { Anuphan } from "next/font/google";

const anuphan = Anuphan({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anuphan",
});

export const metadata: Metadata = {
  title: "SKPharm",
  description: "Calculate chemotherapy drug dosage",
  icons: "/next.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${anuphan.variable} font-sans`}>
        <ThemeProvider attribute="class" forcedTheme="light">
          {/* <div className="flex flex-col">
            <div className="flex items-center place-content-between p-4 border-b border-border">
              <Link href={"/"} className="text-xl font-semibold">
                SKPharm
              </Link>
              <ModeToggle />
            </div> */}
          <div className="flex flex-col bg-background" vaul-drawer-wrapper="">
            {children}
          </div>
          <Analytics />
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
