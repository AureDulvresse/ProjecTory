import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Activity, Clock, Projector } from 'lucide-react';
import { Suspense } from 'react';

export default function DashboardPage() {
   return (
      <div className="flex h-screen bg-muted/40">
         {/* Main Content */}
         <div className="flex-1 p-6 grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
               <h1 className="text-3xl font-bold">Dashboard</h1>

               <div className="grid grid-cols-2 gap-4">
                  <Card>
                     <CardHeader className="flex flex-row items-center justify-between">
                        <span className="text-sm font-medium">Active Projects</span>
                        <Projector className="h-4 w-4 text-primary" />
                     </CardHeader>
                     <CardContent>
                        <Suspense fallback={<Skeleton className="h-8 w-20" />}>
                           <ActiveProjectsCount />
                        </Suspense>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader className="flex flex-row items-center justify-between">
                        <span className="text-sm font-medium">Upcoming Deadlines</span>
                        <Clock className="h-4 w-4 text-primary" />
                     </CardHeader>
                     <CardContent>
                        {/* <DeadlineList /> */}
                     </CardContent>
                  </Card>
               </div>

               <Card>
                  <CardHeader>
                     <h2 className="text-xl font-semibold">Project Health</h2>
                  </CardHeader>
                  <CardContent>
                     {/* <ProjectHealthChart /> */}
                  </CardContent>
               </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
               {/* <QuickActions />
               <RecentActivityTimeline /> */}
            </div>
         </div>
      </div>
   );
}

async function ActiveProjectsCount() {
   // Implémentation réelle avec data fetching
   return <div className="text-2xl font-bold">5</div>;
}