import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { notFound } from 'next/navigation';
import { ProjectHeader } from './header';

async function getProject(id: string) {
   // Implémentation réelle avec Prisma
   return null;
}

export default async function ProjectDetailPage({
   params,
}: {
   params: { id: string };
}) {
   const project = await getProject(params.id);
   if (!project) notFound();

   return (
      <div className="flex flex-col h-full">
         <ProjectHeader project={project} />

         <Tabs defaultValue="overview" className="flex-1 p-6">
            <TabsList className="grid w-full grid-cols-5">
               <TabsTrigger value="overview">Overview</TabsTrigger>
               <TabsTrigger value="docs">Documentation</TabsTrigger>
               <TabsTrigger value="tasks">Tasks</TabsTrigger>
               <TabsTrigger value="analytics">Analytics</TabsTrigger>
               <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
               {/* <ProjectOverviewTab project={project} /> */}
            </TabsContent>

            <TabsContent value="docs">
               {/* <ProjectDocsTab project={project} /> */}
            </TabsContent>
         </Tabs>
      </div>
   );
}