import NavigatioButton from "./_components/navigation-button";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <NavigatioButton />
      {children}
    </div>
  );
}
