"use client";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);
