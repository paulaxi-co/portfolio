import { IProject } from "@/modules/common/models";
import { Chip, Container, Divider, Stack, Typography } from "@mui/material";
import { useMemo } from "react";


interface ProjectHeaderProps {
  project: IProject;
}

export function ProjectHeader({ project: { tags, name, description, descriptors } }: ProjectHeaderProps) {

  const vDescriptors = useMemo(() => {
    return Object.entries(descriptors)
  }, [descriptors]);

  return (
    <Container className="pt-[100px]">
      <Stack justifyContent='space-between' direction={{sm: 'row'}}spacing={4}>
        <Stack>
          <Stack spacing={2} direction="row">
            {tags.map(tag => (
              <Chip key={tag} label={tag} />
            ))}
          </Stack>
          <Typography variant="h2">{name}</Typography>
          <Typography className="max-w-[600px]">{description}</Typography>
        </Stack>
        <Stack spacing={2} className="sm:w-1/2" divider={<Divider orientation="horizontal"/>}>
          {vDescriptors.map(([label, value]) => (
            <Stack justifyContent="space-between" className="w-full" direction="row" key={label}>
              <Typography className="font-bold">{label}</Typography>
              <Typography className="text-right max-w-[350px]">{value}</Typography>
            </Stack>
          ))}
        </Stack>

      </Stack>
    </Container>

  );
}
