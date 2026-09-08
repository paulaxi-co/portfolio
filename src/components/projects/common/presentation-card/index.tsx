import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface ProjectPresentationCardProps {
  title: string;
  description: string;
  img: string;
  alt: string;
}
export function ProjectPresentationCard({ title, description, img, alt }: ProjectPresentationCardProps) {
  return (
    <Container>
      <Paper className="rounded-3xl p-5 sm:p-8">
        <Grid container columns={12} spacing={4}>
          <Grid size={{xs: 12, md: 6}}>
            <Stack spacing={4}>
              <Typography variant="h3">{title}</Typography>
              <Typography>{description}</Typography>
            </Stack>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <Image className="w-full rounded-lg" src={img} alt={alt} width={400} height={300} />
          </Grid>
        </Grid>
      </Paper>
    </Container>

  );
}
