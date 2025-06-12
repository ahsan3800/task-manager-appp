"use client";
import { PATHS } from "@/constants/paths";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp
        path={PATHS.SIGN_UP}
        routing="path"
        signInUrl={PATHS.SIGN_IN}
        afterSignUpUrl={PATHS.AFTER_SIGN_IN}
      />
    </div>
  );
}
