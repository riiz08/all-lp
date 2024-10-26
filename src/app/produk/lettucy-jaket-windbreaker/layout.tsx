import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Lettucy Jaket Windbreaker",
  description: "Lettucy Jaket Windbreaker, Jaket vintage",
};

export default function LettucyJacketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <MetaPixel />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
