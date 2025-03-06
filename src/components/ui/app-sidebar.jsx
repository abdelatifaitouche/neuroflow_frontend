import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Link } from "react-router-dom";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "home",
    icon: Home,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
]

export function AppSidebar() {

  let {logout} = useContext(AuthContext)


  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>   
           
      </SidebarContent>
      <SidebarFooter>
      <SidebarMenuButton onClick={logout}>
                      <Settings />
                      <span>Logout</span>
                    
                  </SidebarMenuButton>
        </SidebarFooter>  
    </Sidebar>
  )
}
