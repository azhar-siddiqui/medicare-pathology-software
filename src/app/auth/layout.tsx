import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavigatioButton from "./_components/navigation-button";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  if (userId) redirect("/dashboard");
  
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <NavigatioButton />
      {children}
    </div>
  );
}
