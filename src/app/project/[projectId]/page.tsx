import { ProjectLayout } from "@/components/projects/project-layout";
import { projectRepository } from "@/modules/project/repository";

export default async function ProjectPage({params} : {params: Promise<{projectId: string}>}) {
  const {projectId} = await params;
  const project = await projectRepository.getProject(projectId);

  return (
    <ProjectLayout project={project} />
  );
}

