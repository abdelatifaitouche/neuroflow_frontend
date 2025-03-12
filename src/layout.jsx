import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/ui/app-sidebar";

import { Outlet } from "react-router-dom";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Button } from "./components/ui/button";


export default function Layout() {

  const location = useLocation()

  const {hash , pathname , search} = location ; 
  const [paths , setPaths ] = useState([])
  useEffect(() => {
    const pathsArray = pathname.split('/').filter((path) => path); // Remove empty strings
    setPaths(pathsArray);
  }, [pathname]);

  return (
    <SidebarProvider>
      <div className="flex ">
        {/* Sidebar */}
        <div className="border-r hidden md:block fixed h-full">
          <AppSidebar />
        </div>

        {/* Main Content (With Sidebar Space Adjusted) */}
        <div className="flex-2 w-[82vw] h-[100%] p-6 md:ml-64 ml-0 bg-gray-100 ">
          {/*<SidebarTrigger />*/}
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink >Home</BreadcrumbLink>
              </BreadcrumbItem>
                {paths.map((path, index) => {
                  const url = `/${paths.slice(0, index + 1).join("/")}`;
                    return (
                      <div className="flex items-center">
                        <BreadcrumbSeparator />
                          <BreadcrumbItem>
                              <BreadcrumbLink href={url}>{path}</BreadcrumbLink>
                          </BreadcrumbItem>
                      </div>
                      );
                    })}
                </BreadcrumbList>
                
          </Breadcrumb>
          <Outlet className="overflow-x-hidden bg-gray-50" />
        </div>
      </div>

    </SidebarProvider>
  );
}