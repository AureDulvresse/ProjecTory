"use client";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {

   return (
      <div className="min-h-screen bg-background">
         {/* Top bar */}
         <header className="sticky top-0 z-40 border-b bg-background">
            <div className="flex h-16 items-center gap-4 px-4">
               <div className="flex-1">
                  <h1 className="text-xl font-bold">ProjecTory</h1>
               </div>
               <UserButton />
            </div>
         </header>
         {/* Main content */}
         <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            {children}
         </main>
      </div>
   );
}