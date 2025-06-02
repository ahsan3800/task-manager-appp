import { UserButton } from "@clerk/nextjs";

export default function Header() {

  
  return (
    <header className="p-4 flex justify-between items-center bg-gray-100">
      <h1 className="text-xl font-bold">MyClerkApp</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </header>
  );
}
