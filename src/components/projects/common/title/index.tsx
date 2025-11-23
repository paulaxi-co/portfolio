import { Container, Typography } from "@mui/material";

interface ProjectTitleProps {
  text: string;
  subText?: string;
  center?: boolean;
}
export function ProjectTitle({ text, center, subText }: ProjectTitleProps) {
  return (
    <Container>
      {!!subText && (
        <Typography>
          {subText}
        </Typography>
      )}
      <Typography textAlign={center ? 'center' : 'left'} variant="h2">
        {text}
      </Typography>
    </Container>
  );
}
