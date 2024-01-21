import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "TimeSync",
  description:
    "Comparte horarios hispanohablantes en redes sociales y Discord. Muestra automáticamente horarios locales para llegar a tu audiencia en cualquier parte del mundo. Coordina tus comunicaciones internacionales con precisión.",
  image: "/favivon.svg",
};

import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
