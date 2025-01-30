import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const ProjectHeader = ({ project }: { project: any }) => {
  const params = useParams();

  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">{project.name}</h1>
      </div>
      <div>
        <Button>Edit Project</Button>
      </div>
    </header>
  );
};
