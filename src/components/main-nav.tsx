"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, NotebookText, ListChecks, BarChart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/customers", icon: Users, label: "Customers" },
  { href: "/contacts", icon: NotebookText, label: "Contacts" },
  { href: "/tasks", icon: ListChecks, label: "Tasks" },
  { href: "/reports", icon: BarChart, label: "Reports" },
];

export function MainNav() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <nav className="flex flex-col gap-2 px-2 py-4">
      <TooltipProvider delayDuration={0}>
        {navItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted",
                  pathname === item.href && "bg-primary/10 text-primary",
                  state === "collapsed" && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className={cn("font-medium", state === "collapsed" && "sr-only")}>{item.label}</span>
              </Link>
            </TooltipTrigger>
            {state === "collapsed" && (
              <TooltipContent side="right">
                {item.label}
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  );
}
