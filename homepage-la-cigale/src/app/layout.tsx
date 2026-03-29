import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Cigale - L'Art de Vivre à la Nantaise",
  description: "Brasserie mythique La Cigale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
    >
      <body className="font-sans bg-background-light text-slate-800 dark:bg-background-dark dark:text-slate-400">
        {children}
      </body>
    </html>
  );
}
