import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "../components/shared/providers";

import { ThemeSwitch } from "@/components/shared/ThemeSwitch";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-dvh bg-background text-foreground font-sans overflow-x-hidden w-full antialiased",
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            enableSystem: false,
          }}
        >
          <ThemeSwitch />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
