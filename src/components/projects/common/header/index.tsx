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
    <Container className="px-4 pt-6 sm:px-6 md:pt-[100px]">
      <Stack justifyContent='space-between' direction={{xs: 'column', md: 'row'}} spacing={5}>
        <Stack>
          <Stack spacing={1} useFlexGap flexWrap="wrap" direction="row">
            {tags.map(tag => (
              <Chip key={tag} label={tag} />
            ))}
          </Stack>
          <Typography variant="h2">{name}</Typography>
          <Typography className="max-w-[600px]">{description}</Typography>
        </Stack>
        <Stack spacing={2} className="md:w-1/2" divider={<Divider orientation="horizontal"/>}>
          {vDescriptors.map(([label, value]) => (
            <Stack justifyContent="space-between" className="w-full" direction={{xs: 'column', sm: 'row'}} gap={1} key={label}>
              <Typography className="font-bold">{label}</Typography>
              <Typography className="max-w-[350px] sm:text-right">{value}</Typography>
            </Stack>
          ))}
        </Stack>

      </Stack>
    </Container>

  );
}
