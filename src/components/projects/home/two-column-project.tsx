import { Title } from "@/components/common/text/title";
import { Grid, Stack, Typography } from "@mui/material";
import { ISmallProject, SmallProjectCard } from "./project-card/project-card";

interface TwoColumnProjectProps {
  title: string;
  description: string;
  projects: [ISmallProject, ISmallProject];
}
export function TwoColumnProject({title, description, projects} : TwoColumnProjectProps) {
  return (
    <Stack spacing={5}>
      <Stack>
        <Title center>{title}</Title>
        <Typography className="text-center">
          {description}
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        <Grid size={6}>
          <SmallProjectCard project={projects[0]} />
        </Grid>
        <Grid size={6}>
          <SmallProjectCard project={projects[1]} />
        </Grid>
      </Grid>
    </Stack>
  );
}
