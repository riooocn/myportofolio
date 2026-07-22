import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "David Rio - Portfolio",
  description: "Portfolio of David Rio - Full Stack Developer",
  openGraph: {
    title: "David Rio - Portfolio",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} min-h-screen flex flex-col bg-background text-foreground relative`}>
        <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--glow-color),transparent)]"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
