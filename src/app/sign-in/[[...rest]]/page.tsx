"use client";
import { PATHS } from "@/constants/paths";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn
        path={PATHS.SIGN_IN}
        routing="path"
        signUpUrl={PATHS.SIGN_UP}
        afterSignInUrl={PATHS.AFTER_SIGN_IN}
      />
    </div>
  );
}
