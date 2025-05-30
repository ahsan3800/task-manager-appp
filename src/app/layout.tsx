import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReduxProvider } from "../redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body cz-shortcut-listen="true">
        <ClerkProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
