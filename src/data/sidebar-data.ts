import {
  AppWindowMac,
  Bell,
  FolderOutput,
  FunnelPlus,
  HelpCircle,
  LayoutDashboard,
  List,
  ListTodo,
  MessagesSquare,
  Monitor,
  Package,
  Package2,
  Palette,
  Settings,
  Stethoscope,
  TestTube,
  User,
  UserCog,
  Users,
  Wrench,
} from "lucide-react";

import { type SidebarData } from "@/@types/types";

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Patient Registration",
          url: "/patient-registration",
          icon: User,
        },
        {
          title: "Tasks",
          url: "/tasks",
          icon: ListTodo,
        },
        {
          title: "Apps",
          url: "/apps",
          icon: Package,
        },
        {
          title: "Chats",
          url: "/chats",
          badge: "3",
          icon: MessagesSquare,
        },
        {
          title: "Users",
          url: "/users",
          icon: Users,
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          title: "Lab",
          icon: AppWindowMac,
          items: [
            {
              title: "Manage Doctors",
              url: "/manage-doctors",
              icon: Stethoscope,
            },
          ],
        },
      ],
    },
    {
      title: "Test Management",
      items: [
        {
          title: "Test",
          icon: TestTube,
          items: [
            {
              title: "Add New Test Group",
              url: "/add-new-test-group",
              icon: FunnelPlus,
            },
            {
              title: "Test List",
              url: "/test-list",
              icon: List,
            },
            {
              title: "Package",
              url: "/package",
              icon: Package2,
            },
            {
              title: "Outsorce",
              url: "/test-outsource",
              icon: FolderOutput,
            },
          ],
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: Bell,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: Monitor,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: HelpCircle,
        },
      ],
    },
  ],
};
