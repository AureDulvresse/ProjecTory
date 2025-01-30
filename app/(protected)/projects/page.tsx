import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { DataTable } from '@/components/common/data-table';

async function getProjects() {
   // Implémentation réelle avec Prisma
   return [];
}

export default async function ProjectListPage() {
   const projects = await getProjects();

   return (
      <div className="p-6 space-y-4">
         <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Projects</h1>
            <Button asChild>
               <Link href="/projects/new">
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
               </Link>
            </Button>
         </div>

         {/* <DataTable
            data={projects}
            columns={columns}
            filterColumn="name"
            facets={[
               {
                  columnId: "status",
                  title: "Status",
                  options: [
                     { label: "Active", value: "active" },
                     { label: "Archived", value: "archived" },
                  ],
               },
            ]}
         /> */}
      </div>
   );
}