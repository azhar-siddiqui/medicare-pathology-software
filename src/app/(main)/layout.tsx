import { AppSidebar } from "@/components/common/app-sidebar";
import Header from "@/components/common/header";
import { ProfileDropdown } from "@/components/common/profile-dropdown";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

import { SearchProvider } from "@/components/providers/search-provider";
import { Search } from "@/components/ui/search";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  if (!userId) redirect("/auth/sign-in");

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value !== "false";

  return (
    <SearchProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset
          className={cn(
            // Set content container, so we can use container queries
            "@container/content",

            // If layout is fixed, set the height
            // to 100svh to prevent overflow
            "has-[[data-layout=fixed]]:h-svh",

            // If layout is fixed and sidebar is inset,
            // set the height to 100svh - spacing (total margins) to prevent overflow
            "peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]"
          )}
        >
          {/* ===== Top Heading ===== */}
          <Header fixed>
            <div className="ms-auto flex items-center space-x-4">
              <Search />
              <AnimatedThemeToggler />
              <ProfileDropdown />
            </div>
          </Header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </SearchProvider>
  );
}
