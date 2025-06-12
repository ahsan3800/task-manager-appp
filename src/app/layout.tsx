import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReduxProvider } from "../redux/provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Manager App",
  description: "An awesome app with Clerk and Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body cz-shortcut-listen="true">
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
