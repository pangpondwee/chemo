import "./globals.css";
import { Metadata } from "next";
import {
  Inter,
  IBM_Plex_Sans_Thai_Looped,
  Anuphan,
  Sarabun,
  Noto_Sans_Thai_Looped,
} from "next/font/google";
import { ThemeProvider } from "@/components/themeProvider";
import { ModeToggle } from "@/components/modeToggle";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Sans_Thai_Looped({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
});
const anuphan = Anuphan({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
});
const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
});
const noto = Noto_Sans_Thai_Looped({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
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
      <body className={noto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col">
            <div className="flex items-center place-content-between p-4">
              <div className="text-xl font-semibold">SKPharm</div>
              <ModeToggle />
            </div>
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
