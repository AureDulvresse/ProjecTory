"use client";
import { UserButton } from "@clerk/nextjs";
import { ChevronRight, Home, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const routeMap: { [key: string]: string } = {
   dashboard: "Dashboard",
   projects: "Projets",
   team: "Équipe",
   settings: "Paramètres",
   calendar: "Calendrier",
};

// Simuler une liste de projets (à remplacer par vos données réelles)
const projects = [
   { id: 1, name: "Projet Alpha" },
   { id: 2, name: "Projet Beta" },
   { id: 3, name: "Projet Gamma" },
];

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();
   const pathSegments = pathname.split('/').filter(Boolean);
   const currentProject = projects[0]; // À remplacer par la logique de sélection du projet actif

   return (
      <div className="min-h-screen bg-background">
         {/* Header principal */}
         <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-6">
               <div className="flex items-center gap-2">
                  <Link
                     href="/dashboard"
                     className="flex items-center gap-2 transition-colors hover:text-primary"
                  >
                     <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <span className="text-lg font-bold text-primary-foreground">P</span>
                     </div>
                     <span className="text-xl font-bold">ProjecTory</span>
                  </Link>
               </div>

               {/* Sélecteur de projet */}
               <div className="flex-1 px-8">
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button
                           variant="ghost"
                           className="gap-2 text-lg font-semibold"
                        >
                           {currentProject.name}
                           <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-56">
                        {projects.map((project) => (
                           <DropdownMenuItem key={project.id}>
                              {project.name}
                           </DropdownMenuItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>
               </div>

               {/* Actions de droite */}
               <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                     Documentation
                  </Button>
                  <Button variant="outline" size="sm">
                     Support
                  </Button>
                  <div className="h-8 w-px bg-border" />
                  <UserButton
                     afterSignOutUrl="/"
                     appearance={{
                        elements: {
                           avatarBox: "h-8 w-8",
                        }
                     }}
                  />
               </div>
            </div>

            {/* Breadcrumb avec contexte projet */}
            <div className="border-t bg-muted/50 px-6 py-2">
               <nav className="flex" aria-label="Breadcrumb">
                  <motion.ol
                     className="flex items-center gap-2 text-sm"
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                  >
                     <li className="flex items-center">
                        <Link
                           href="/dashboard"
                           className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                        >
                           <Home className="h-4 w-4" />
                        </Link>
                     </li>
                     <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="ml-2 font-medium text-foreground">
                           {currentProject.name}
                        </span>
                     </li>
                     {pathSegments.map((segment, index) => {
                        const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;

                        return (
                           <li key={segment} className="flex items-center">
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                              <Link
                                 href={url}
                                 className={cn(
                                    "ml-2 capitalize",
                                    isLast
                                       ? "font-medium text-foreground"
                                       : "text-muted-foreground hover:text-foreground"
                                 )}
                                 aria-current={isLast ? "page" : undefined}
                              >
                                 {routeMap[segment] || segment}
                              </Link>
                           </li>
                        );
                     })}
                  </motion.ol>
               </nav>
            </div>
         </header>

         {/* Main content */}
         <main className="flex-1 overflow-y-auto p-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.2 }}
            >
               {children}
            </motion.div>
         </main>
      </div>
   );
}