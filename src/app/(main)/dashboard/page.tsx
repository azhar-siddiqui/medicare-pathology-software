import Header from "@/components/common/header";
import { Main } from "@/components/common/main";
import { ProfileDropdown } from "@/components/common/profile-dropdown";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { Search } from "@/components/ui/search";
import prisma from "@/lib/prisma";

export default async function DashboardPage() {
  const users = await prisma.user.findMany();

  console.log("users", users);
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header fixed>
        <div className="ms-auto flex items-center space-x-4">
          <Search />
          <AnimatedThemeToggler />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        </div>
      </Main>
    </>
  );
}
