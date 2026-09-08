import { Stack } from "@mui/material";
import { ComponentBuilder } from "../common/component-builder";
import { ProjectHeader } from "../common/header";
import { IProject } from "@/modules/common/models";

export async function ProjectLayout({project}: {project: IProject}) {

  return (
    <Stack spacing={{xs: 5, md: 7}} className="w-full overflow-x-clip">
      <ProjectHeader project={project} />
      {project.components.map(component => (
        <ComponentBuilder key={component.id} component={component} />
      ))}
    </Stack>
  );
}
