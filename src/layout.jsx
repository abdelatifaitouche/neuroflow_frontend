import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/ui/app-sidebar";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r hidden md:block fixed h-full">
          <AppSidebar />
        </div>

        {/* Main Content (With Sidebar Space Adjusted) */}
        <div className="flex-1 p-6 md:ml-64">
          <SidebarTrigger />
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}