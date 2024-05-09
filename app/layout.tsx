import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Container } from "@radix-ui/themes";
import Provider from "@/app/auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker for you to track and manage your issues",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
        <Theme accentColor="violet">
          <Navbar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
        </Theme>
      </Provider>
      </body>
    </html>
  );
}
