import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReduxProvider } from "../redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ReduxProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
