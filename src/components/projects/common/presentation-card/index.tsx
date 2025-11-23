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
      <Paper className="p-8 rounded-3xl">
        <Grid container columns={2} spacing={4}>
          <Grid size={1}>
            <Stack spacing={4}>
              <Typography variant="h3">{title}</Typography>
              <Typography>{description}</Typography>
            </Stack>
          </Grid>
          <Grid size={1}>
            <Image className="w-full rounded-lg" src={img} alt={alt} width={400} height={300} />
          </Grid>
        </Grid>
      </Paper>
    </Container>

  );
}
