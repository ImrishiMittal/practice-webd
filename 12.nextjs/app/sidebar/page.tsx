"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function SidebarPage() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1 p-6">
        <SidebarTrigger />

        <h1 className="text-3xl font-bold mt-6">
          Dashboard
        </h1>

        <p>
          Welcome to the sidebar example.
        </p>
      </main>
    </SidebarProvider>
  );
}