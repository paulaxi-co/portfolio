import { Container, Grid } from "@mui/material";
import Image from "next/image";

interface ProjectScrenshots {
  screenshots: {
    img: string;
    alt: string;
  }[]
}
export function ProjectScreenshots({ screenshots }: ProjectScrenshots) {
  return (
    <Container>
      <Grid container justifyContent="center" spacing={2} columns={4}>
        {screenshots.map(screenshot => (
          <Grid key={screenshot.alt} size={1}>
            <Image
              className="w-full object-contain"
              width={400}
              height={700}
              alt={screenshot.alt}
              src={screenshot.img}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
